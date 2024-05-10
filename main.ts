import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Carrega a classe do Google Generative AI
import type { GoogleGenerativeAI } from "@google/generative-ai";

// Define as variáveis de configuração do plugin
interface GeminiPluginSettings {
	APIKey: string;
    promptSummary: string;
    promptExpand: string;
    promptRewrite: string;
    promptAnswer: string;
}

// Define as configurações padrão do plugin
const DEFAULT_SETTINGS: GeminiPluginSettings = {
	APIKey: '',
    promptSummary: 'Resuma o texto a seguir: ',
    promptExpand: 'Expanda o texto a seguir: ',
    promptRewrite: 'Reescreva o texto a seguir: ',
    promptAnswer: 'Responda a pergunta a seguir:'

}

// Define a classe do plugin e suas funções
export default class GeminiPlugin extends Plugin {
    settings: GeminiPluginSettings; // Configurações do plugin
    genAI: GoogleGenerativeAI; // Instância do Google Generative AI

    // Função de inicialização do plugin
    async onload() {
        await this.loadSettings(); // Carrega as configurações do plugin

        this.genAI = new GoogleGenerativeAI(this.settings.APIKey); // Inicializa o Google Generative AI

        // Adiciona o comando de resumo de texto no Obsidian
        this.addCommand({
            id: 'quick-summary',
            name: 'Resumir texto',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const selection = editor.getSelection(); // Pega o texto selecionado no editor

                // Abre o modal de carregamento
                const loadingModal = new LoadingModal(this.app); // Cria o modal de carregamento
                loadingModal.open();

                // Gera o resumo do texto selecionado
                try {
                    const prompt = this.settings.promptSummary + selection; // Define o prompt de resumo
                    const result = await run(prompt, this.genAI);

                    // Insere o resumo no editor de texto abaixo do texto selecionado
                    const cursor = editor.getCursor();
                    editor.replaceRange("\n\n" + result, { line: cursor.line + 1, ch: 0 }, { line: cursor.line + 1, ch: 0 });

                    // Move o cursor para o final do resumo
                    editor.setCursor({ line: cursor.line + 2, ch: 0 });
                } catch (error) {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    new Notice("Erro ao gerar conteúdo: " + error.message);
                } finally {
                    // Fecha o modal de carregamento
                    loadingModal.close();
                }
            }
        });

        // Adiciona o comando de expansão de texto no Obsidian
        this.addCommand({
            id: 'quick-expand',
            name: 'Expandir texto',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const selection = editor.getSelection(); // Pega o texto selecionado no editor

                // Abre o modal de carregamento
                const loadingModal = new LoadingModal(this.app); // Cria o modal de carregamento
                loadingModal.open();

                // Gera a expansão do texto selecionado
                try {
                    const prompt = this.settings.promptExpand + selection; // Define o prompt de expansão
                    const result = await run(prompt, this.genAI);

                    // Insere a expansão no editor de texto abaixo do texto selecionado
                    const cursor = editor.getCursor();
                    editor.replaceRange("\n\n" + result, { line: cursor.line + 1, ch: 0 }, { line: cursor.line + 1, ch: 0 });

                    // Move o cursor para o final da expansão
                    editor.setCursor({ line: cursor.line + 2, ch: 0 });
                } catch (error) {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    new Notice("Erro ao gerar conteúdo: " + error.message);
                } finally {
                    // Fecha o modal de carregamento
                    loadingModal.close();
                }
            }
        });

        // Adiciona o comando de reescrita de texto no Obsidian
        this.addCommand({
            id: 'quick-rewrite',
            name: 'Reescrever texto',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const selection = editor.getSelection(); // Pega o texto selecionado no editor

                // Abre o modal de carregamento
                const loadingModal = new LoadingModal(this.app); // Cria o modal de carregamento
                loadingModal.open();

                // Gera a reescrita do texto selecionado
                try {
                    const prompt = this.settings.promptRewrite + selection; // Define o prompt de reescrita
                    const result = await run(prompt, this.genAI);

                    // Insere a reescrita no editor de texto abaixo do texto selecionado
                    const cursor = editor.getCursor();
                    editor.replaceRange("\n\n" + result, { line: cursor.line + 1, ch: 0 }, { line: cursor.line + 1, ch: 0 });

                    // Move o cursor para o final da reescrita
                    editor.setCursor({ line: cursor.line + 2, ch: 0 });
                } catch (error) {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    new Notice("Erro ao gerar conteúdo: " + error.message);
                } finally {
                    // Fecha o modal de carregamento
                    loadingModal.close();
                }
            }
        });

        // Adiciona o comando de resposta de texto no Obsidian
        this.addCommand({
            id: 'quick-answer',
            name: 'Responder texto',
            editorCallback: async (editor: Editor, view: MarkdownView) => {
                const selection = editor.getSelection(); // Pega o texto selecionado no editor

                // Abre o modal de carregamento
                const loadingModal = new LoadingModal(this.app); // Cria o modal de carregamento
                loadingModal.open();

                // Gera a resposta do texto selecionado
                try {
                    const prompt = this.settings.promptAnswer + selection; // Define o prompt de resposta
                    const result = await run(prompt, this.genAI);

                    // Insere a resposta no editor de texto abaixo do texto selecionado
                    const cursor = editor.getCursor();
                    editor.replaceRange("\n\n" + result, { line: cursor.line + 1, ch: 0 }, { line: cursor.line + 1, ch: 0 });

                    // Move o cursor para o final da resposta
                    editor.setCursor({ line: cursor.line + 2, ch: 0 });
                } catch (error) {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    new Notice("Erro ao gerar conteúdo: " + error.message);
                } finally {
                    // Fecha o modal de carregamento
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
			.setName('API Key')
			.setDesc('Pegue a sua chave de acesso no site do Gemini AI (https://makersuite.google.com/app/apikey?hl=pt-br).')
			.addText(text => text
				.setPlaceholder('Sua API KEY')
				.setValue(this.plugin.settings.APIKey)
				.onChange(async (value) => {
					this.plugin.settings.APIKey = value;
					// Save the settings
					await this.plugin.saveSettings();
				}));

        new Setting(containerEl)
        .setName('Prompt para resumos')
        .setDesc('Defina qual base de prompt será utilizada para resumos. Exemplo: "Resuma o texto a seguir"')
        .addText(text => text
            .setPlaceholder('Resumo o texto a seguir: ')
            .setValue(this.plugin.settings.promptSummary)
            .onChange(async (value) => {
                this.plugin.settings.promptSummary = value;
                // Save the settings
                await this.plugin.saveSettings();
            }));

        new Setting(containerEl)
        .setName('Prompt para expandir')
        .setDesc('Defina qual base de prompt será utilizada para expandir. Exemplo: "Expanda o texto a seguir:"')
        .addText(text => text
            .setPlaceholder('Expanda o texto a seguir: ')
            .setValue(this.plugin.settings.promptExpand)
            .onChange(async (value) => {
                this.plugin.settings.promptExpand = value;
                // Save the settings
                await this.plugin.saveSettings();
            }));

        new Setting(containerEl)
        .setName('Prompt para reescrever')
        .setDesc('Defina qual base de prompt será utilizada para reescrever. Exemplo: "Reescreva o texto a seguir:"')
        .addText(text => text
            .setPlaceholder('Reescreva o texto a seguir: ')
            .setValue(this.plugin.settings.promptRewrite)
            .onChange(async (value) => {
                this.plugin.settings.promptRewrite = value;
                // Save the settings
                await this.plugin.saveSettings();
            }));

        new Setting(containerEl)
        .setName('Prompt para responder')
        .setDesc('Defina qual base de prompt será utilizada para responder. Exemplo: "Responda a pergunta a seguir:"')
        .addText(text => text
            .setPlaceholder('Responda a pergunta a seguir: ')
            .setValue(this.plugin.settings.promptAnswer)
            .onChange(async (value) => {
                this.plugin.settings.promptAnswer = value;
                // Save the settings
                await this.plugin.saveSettings();
            }));
	}
}

// Define o modelo que será utilizado no Google Generative AI e executa a função de geração de conteúdo
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