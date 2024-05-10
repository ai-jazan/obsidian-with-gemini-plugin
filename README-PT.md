# Obsidiana com Gemini

Esta é a minha tentativa de criar um plugin para [Obsidian](https://obsidian.md). Eu uso o Obsidian como meu aplicativo de anotações diárias para criar minha base de conhecimento seguindo alguns sistemas de gestão de conhecimento pessoal, mas com meu toque pessoal. Eu nunca tentei programar nada em javascript e Typescript então este foi um grande desafio. 

A ideia de criar este Plugin surgiu da participação no [Imersão Alura + Google](https://www.alura.com.br/artigos/imersao-ia) que é um evento criado em parceria entre [Alura](https ://www.alura.com.br/) escola de tecnologia e Google. O código criado aqui é baseado em um [plug-in de exemplo para Obsidian](https://github.com/obsidianmd/obsidian-sample-plugin) e no [Guia de início rápido para a API Google Gemini](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart). Abaixo estão os requisitos e como executar este plugin em seu cofre local do Obsidian.

# Demonstração das funcionalidades deste plugin. 



# Como usar este plugin diretamente no aplicativo Obsidian. 

Este plugin ainda não está disponível na comunidade de plugins do Obsidian, então você precisa instalá-lo localmente. Pretendo solicitar a aprovação do plugin quando algumas funcionalidades estiverem mais elaboradas. O arquivo principal que faz a integração com a API do Google é o `main.ts`. 

Para executar este plugin localmente utilize o seguinte passo a passo:

## Etapa 1: Instale o Obsidian e crie um novo cofre

Baixe o aplicativo [Obsidian](https://obsidian.md) e instale-o em seu computador, se ainda não estiver instalado. Crie um novo cofre (recomendado) ou abra um dos seus cofres. Um cofre é apenas uma pasta no seu computador, portanto você pode acessá-lo fora do aplicativo Obsidian.

## Etapa 2: Baixe este projeto.

Baixe ou clone este projeto para o seu computador. Para baixar basta clicar no botão verde com `<code>` e clicar em download. Para clonar use o seguinte comando:

```shell
git clone https://github.com/rafaelalvesitm/obsidian-with-gemini-plugin.git
```
Uma vez baixado extraia os arquivos para o seu computador.

## Etapa 3: Crie uma pasta para o plugin e mova os arquivos necessários.

Abra a pasta que você definiu como cofre do Obsidian. Nesta pasta, abra a pasta `.obsidian` e crie uma nova pasta chamada `plugins` se ele já não existir. Dentro desta nova pasta crie uma pasta chamada `gemini`. Mova os arquivos `main.js`, `styles.css` e `manifest.json` baixados deste repositório para esta pasta.

## Etapa 4: Abra seu cofre no Obsidian. 

Abra seu cofre no próprio Obsidian e clique nas configurações (ícone de engrenagem no canto inferior esquerdo). Vá para os plug-ins da comunidade e habilite-os se eles já não estiverem habilitados. Veja se o aplicativo `Google Gemini Integration` é mostrado e está habilitado, se não estiver habilite-o aqui. Clique no ícone de engrenagem deste plugin. 

Nesta página você deve definir as configurações do Plugin, incluindo:

- Chave de API para a API Google Gemini ([Crie uma aqui](https://aistudio.google.com/app/u/1/apikey)). 
- Frase padrão para resumir textos.
- Frase padrão para expandir textos.
- Frase padrão para reescrever textos. 
- Frase padrão para pedir respostas.

## Etapa 5: Use o plugin

Para usar este plugin, basta selecionar algum texto que deseja enviar ao Gemini e abrir  Paleta de Comandos (CTRL + P) e procurar um dos seguintes comandos:

- Resumir texto: Resume o texto selecionado incluindo a frase padrão definina para resumos nas configurações do plugin. 
- Expandir texto: Expande o texto selecionado incluindo a frase padrão definina para expansão de textos nas configurações do plugin. 
- Reescrever texto: Reescreve o texto selecionado incluindo a frase padrão definina para reescrita de textos nas configurações do plugin.
- Responder texto: Responde o texto selecionado incluindo a frase padrão definina para questionar nas configurações do plugin.

# Como contribuir para este projeto

## Requisitos

- [Git](https://git-scm.com/) instalado em sua máquina local.
- Um ambiente de desenvolvimento local para [Node.js](https://node.js.org/en/about/).
- Um editor de código, como [Visual Studio Code](https://code.visualstudio.com/).
- Aplicativo [Obsidian](https://obsidian.md) com um Vault criado. Eu recomendo testá-lo em um novo Vault.

## Passo 1: Clone este repositório e coloque-o em um cofre do Obsidian.

O primeiro passo é criar um novo cofre no [Obsidian](https://obsidian.md). Então você deve usar o terminal para ir até o local do cofre e criar uma pasta para os plugins conforme apresentado anteriormente. Finalmente você precisa entrar na pasta Plugins. Use os seguintes comandos:

```shell
caminho do CD/para/cofre
mkdir .obsidian/plugins
cd .obsidian/plugins
```

Dentro desta pasta você deve clonar o conteúdo deste repositório com o seguinte comando:

```shell
clone do git https://github.com/rafaelalvesitm/obsidian-with-gemini-plugin.git
```

## Etapa 2: Construa o plugin

Nesta etapa, você compilará o plugin para que o Obsidian possa carregá-lo localmente. Para fazer isso, navegue até o diretório do plugin com os comandos:

```shell
cd obsidian-with-gemini-plugin
```

Então você precisa instalar dependências para o aplicativo em seu computador. Para fazer isso use o seguinte comando:

```shell
npm install 
npm install @google/generative-ai
```

Finalmente, você precisa compilar o código-fonte. Para fazer isso use o seguinte comando:

```shell
npm run dev
```

**OBS 2:** O comando acima continua rodando no terminal e reconstrói o plugin quando você modifica o código fonte.
**OBS 2:** Observe que o diretório do plugin agora possui um arquivo main.js que contém uma versão compilada do plugin.

## Etapa 3: Habilite o plugin

Para carregar um plugin no Obsidian, primeiro você precisa habilitá-lo. Para fazer isso, siga as etapas abaixo:

- Em Obsidian, abra Configurações.
- No menu lateral, selecione Plug-ins da comunidade.
- Selecione Ativar plug-ins da comunidade.
- Em Plug-ins instalados, habilite o Plug-in selecionando o botão de alternância próximo a ele.
- Agora você está pronto para usar o plugin no Obsidian.

## Etapa 4: Altere o código e verifique as modificações no Obsidian

Depois disso, você pode fazer as alterações que achar úteis no arquivo `main.ts` e então ver as alterações no aplicativo Obsidian. Às vezes é necessário recarregar o aplicativo para ver as alterações. Para isto basta fechar e abrir novamente o aplicativo ou abrir a Paleta de Comandos (CTRL + P) e procurar a opção `recarregar o app sem salvar`. 