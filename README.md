# Obsidian with Gemini

This is my first attempt at creating a Plugin for [Obsidian](https://obsidian.md). I use Obsidian as my daily note taking app to create my knowledge base following some Personal Knowledge Management systems but with my own personal touch. 

The ideia to create this Plugin came from participating in the [Imersão Alura + Google](https://www.alura.com.br/artigos/imersao-ia) which is an event created in a partnership between [Alura](https://www.alura.com.br/) technology school and Google. The code created here is based on a [sample plugin for Obsidian](https://github.com/obsidianmd/obsidian-sample-plugin) and the [QuickStart Guide for the Google Gemini API](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart). Bellow are the requirements and how to run this Plugin to your local Obsidian Vault (I am still going to apply for it to be availbel as a ommunity Plugin) 

# How to use this plugin 

This plugin is not yet available in the Community Plugins in Obsidian so ou need to install it locally. To do this follow the steps bellow

## Step 1: Create a new vault.  

Dowload the [Obsidian](https://obsidian.md) app and install it on your computer if not yet installed. Create a new vault (recommended) or open one of your vaults. A vault is just a folder on your computer so you can access it outside the Obsidian App.  

## Step 2: Download this project. 

Dowload or clone this project to your computer. To download just click on the green button with `<code>` on it and click on download. To clone use the following command:

```shell
git clone https://github.com/rafaelalvesitm/obsidian-with-gemini-plugin.git
```

## Step 3: Create a folder for the plugin and move necessary files.

Open you obsidian Vault in your computer and on the `.obsidian` folder create a folder called `plugins`. Inside this new folder create a folder called `obsidian-with-gemini-plugin`. Move the files `main.js`, `styles.css` and `manifest.json`  to this folder. 

## Step 4: Open yout valt 

Open your valt and click on the settings (Gear icon on the bottom left corner). Go to the community plugins and enable it. See it the `Google Gemini Integration` app is shown. Click on the gear icon for this plugin. Here you need to put your API Key for the Google Gemini API ([Create one here](https://aistudio.google.com/app/u/1/apikey)). 

## Step 5: Use the plugin

To use this plugin, just select some text that you want to sent to Gemini and open the Command Pallet (CTRL + P) and find the `Quick Message` command. Click on it and the select text should be send to Gemini. When it is processed the result is show below your selected text. 

# How to use this plugin and change it if needed

## Requirements

- [Git](https://git-scm.com/) installed on your local machine.
- A local development environment for [Node.js](https://node.js.org/en/about/).
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/).
- [Obsidian](https://obsidian.md) app with a Vault created. I recommend to test it on an new Vault.

## Step 1: Download the plugin and put it into a vault. 

The first step is to create a new valt in [Obsidian](https://obsidian.md). Then you must use the terminal to go to that valult location and create a folder for the plugins, if it was not created already. Finally you need to move inside the Plugins folder. Use the following commands:

``` shell
cd path/to/vault
mkdir .obsidian/plugins
cd .obsidian/plugins
```

Inside this folder you should clone or download and extract the content of this repository. To clone, use the following command

```shell
git clone https://github.com/rafaelalvesitm/obsidian-with-gemini-plugin.git
```

## Step 2: Build the plugin

In this step, you'll compile the plugin so that Obsidian can load it locally. To do this, navigate to the plugin directory with the commands:

```shell
cd obsidian-with-gemini-plugin
```

Then you need to Install dependencies for the app on yout computer. To do this use the following command:

```shell
npm install
```

Finally, you need to compile the source code. To do this use the following command:
The following command keeps running in the terminal and rebuilds the plugin when you modify the source code.
```shell
npm run dev
```

**OBS 2:** The command above keeps running in the terminal and rebuilds the plugin when you modify the source code.  
**OBS 2:** Notice that the plugin directory now has a main.js file that contains a compiled version of the plugin.

## Step 3: Enable the plugin

To load a plugin in Obsidian, you first need to enable it. To do this, following the steps below:

- In Obsidian, open Settings.
- In the side menu, select Community plugins.
- Select Turn on community plugins.
- Under Installed plugins, enable the Sample Plugin by selecting the toggle button next to it.
- You're now ready to use the plugin in Obsidian. 
- Next, you can make some changes to the plugin.

After that you can make whener change you find useful in the file `main.ts` and then see the changes on the Obsidian App. Sometimes it is needed to reload the app to see the changes. 
