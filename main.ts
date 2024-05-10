import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Load the GoogleGenerativeAI class from the package
const { GoogleGenerativeAI } = require("@google/generative-ai");
// Remember to rename these classes and interfaces!

interface GeminiPluginSettings {
	APIKey: string;
}

const DEFAULT_SETTINGS: GeminiPluginSettings = {
	APIKey: 'Key goes here'
}

export default class GeminiPlugin extends Plugin {
    settings: GeminiPluginSettings;
    genAI: GoogleGenerativeAI;

    async onload() {
        await this.loadSettings();

        this.genAI = new GoogleGenerativeAI(this.settings.APIKey);

        // This adds an editor command that can perform some operation on the current editor instance
        this.addCommand({
            id: 'quick-message',
            name: 'Quick message to Gemini',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const prompt = editor.getSelection();

                // Open loading modal
                const loadingModal = new LoadingModal(this.app);
                loadingModal.open();

                try {
                    const result = await run(prompt, this.genAI);

                    // Insert result below cursor position
                    const cursor = editor.getCursor();
                    editor.replaceRange("\n" + result, { line: cursor.line + 1, ch: 0 }, { line: cursor.line + 1, ch: 0 });

                    // (Optional) Move cursor to next line
                    editor.setCursor({ line: cursor.line + 2, ch: 0 });
                } catch (error) {
                    new Notice("Error generating content: " + error.message);
                } finally {
                    // Close loading modal
                    loadingModal.close();
                }
            }
        });

        // Add settings tab
        this.addSettingTab(new SampleSettingTab(this.app, this));
    }

    onunload() {}

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

class SampleSettingTab extends PluginSettingTab {
	plugin: GeminiPlugin;

	constructor(app: App, plugin: GeminiPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('API Kkey')
			.setDesc('Get your API key from the Gemini website.')
			.addText(text => text
				.setPlaceholder('Enter your API Key')
				.setValue(this.plugin.settings.APIKey)
				.onChange(async (value) => {
					this.plugin.settings.APIKey = value;
					// Save the settings
					await this.plugin.saveSettings();
				}));
	}
}

// Google Generative AI
async function run(prompt: string, genAI: GoogleGenerativeAI) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}


// Modal de carregamento
class LoadingModal extends Modal {
    constructor(app: App) {
        super(app);
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('div', { text: 'Generating content...', cls: 'loading-message' });
        contentEl.createEl('div', { cls: 'loading-animation' });
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}