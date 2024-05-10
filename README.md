# Obsidian with Gemini

This is my first attempt at creating a Plugin for [Obsidian](https://obsidian.md). I use Obsidian as my daily note taking app to create my knowledge base following some Personal Knowledge Management systems but with my own personal touch. 

The ideia to create this Plugin came from participating in the [Imersão Alura + Google](https://www.alura.com.br/artigos/imersao-ia) which is an event created in a partnership between [Alura](https://www.alura.com.br/), a Brazilian technology school, and Google. The code created here is based on a [sample plugin for Obsidian](https://github.com/obsidianmd/obsidian-sample-plugin) and the [QuickStart Guide for the Google Gemini API](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart). Bellow are the requirements and how to run this Plugin to your local Obsidian Vault (I am still going to apply for it to be availbel as a ommunity Plugin) 

# How to use this plugin 

The first thing that you need is a Google Gemini Ai API key. [Get yours here if you dont have one](https://aistudio.google.com/app/u/1/apikey). Put this API key in the plugin settings. 

This plugin offers 4 functions:

- Quick answer - Answer a selected question. 
- Quick expand - Expand a selected text.
- Quick summary - Summarize a selected text. 
- Quick rewrite - Rewrite a selected text. 

Each of this functions has a prompt pattern associated with it in the settings of this Plugin. To use each function just select a given text and select the command in the Command Pallet (CTRL + P). You can also define hotkeys for each of this commands. 

# How to contributed to this project

To contribute to this project just clone this repository, make the changes and create a pull request if you want. 
