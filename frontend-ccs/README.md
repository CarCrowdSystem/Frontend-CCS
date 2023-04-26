# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


No projeto React é muito comum termos páginas HTML que serão apresentadas para o usuário. Todas as páginas serão agrupadas em um diretório chamado pages.

Teremos outro diretório chamado ui. Aqui iremos agrupar tudo que será relacionado ao design da aplicação como, por exemplo, componentes, estilos CSS, temas e partes de uma tela.

E, por fim, teremos o diretório data, onde vamos agrupar tudo relacionado a regra de negócio, lógica, dados etc.

src
├───data
│   ├───@types
│   ├───contexts
│   ├───hooks
│   ├───reduces
│   └───services
├───pages
│   └───home
└───ui
    ├───components
    ├───partials
    ├───styles
    └───theme

Diretório data
Aqui não teremos muito o que discutir, é apenas um diretório onde você irá abstrair tudo relacionado aos seus dados e lógica. Então teremos os diretórios @types, onde ficam as interfaces e tipos, caso esteja utilizando TypeScript, hooks, context, reducers e services que é o local onde você pode colocar funções que vão ser reutilizadas em toda aplicação.

Vamos detalhar um pouco mais o que deve ter cada um desses diretórios.

data
├───@types
├───contexts
├───hooks
├───reduces
└───services

Diretório services
No diretório service, você pode criar funções que vão ser utilizadas em toda a aplicação como, por exemplo, funções para converter dados, objetos, funções contendo configuração de APIs, para fazer requisições HTTP, validação de formulários, etc.

Diretório hooks
Neste diretório você pode colocar a lógica das telas e componentes. É importante notar que aqui você vai criar diretórios dentro de diretórios para poder identificar de onde é aquele hook, se é referente a uma página ou componente.

hooks
├───components
│   └───inputs
│       └───UserForm
│           └───forms
└───pages
    ├───cadastro
    └───diarias

Note que separamos bem a origem de cada hook, se ele está em pages ou faz parte de um componente.

Diretório @types
O diretório @types, de uma aplicação React, só é utilizado quando estamos trabalhando com TypeScript, visto que lá iremos criar os tipos de cada objeto e, também, interfaces

@types
├───3rd
└───forms
└───user

Note que aqui, também, podemos organizar cada tipo em outros diretórios.

No diretório 3rd iremos colocar arquivos com a extensão, *.d.ts, caso haja a necessidade, que são arquivos de declaração de tipos.

Diretório ui
Aqui vamos agrupar tudo relacionado a nossa interface do usuário.

Também temos uma proposta de como você deve agrupar esses elementos internamente. Uma das maiores vantagens do React é o modo de como é fácil componentizar sua UI, portanto neste diretório você deve criar um diretório para cada página ou pages. Podemos adicionar outro diretório de partes de uma página, dessa forma sua página principal pode ser lida facilmente, pois é montada com vários pedaços de uma página.

E, se você já adivinhou, pode fazer isso, também, no nível da UI, criando um diretório components que vão ser utilizados em mais de uma página da aplicação.

Então dentro de UI teremos o diretório components, partials que são partes de uma página, styles e até themes que é algo relacionado a configuração de temas.

ui
├───components
├───partials
├───styles
└───themes

Diretório components
Neste diretório nós, também, teremos outros diretórios para melhor organizar os componentes, aqui iremos organizar por categorias, por exemplo, um componente de botão e texto faz parte da categoria de inputs, outro componente de avatar ou status faz parte da categoria de data-display.

components
├───data-display
│   ├───DataList
│   ├───JobInformation
│   ├───Status
├───feedback
│   ├───Dialog
├───inputs
│   ├───RoundedButton
│   ├───TextField
│   └───UserForm
│       └───forms
├───navigation
│   ├───Link
└───surfaces
    ├───Footer
    └───Header

Eu costumo utilizar essas categorias seguindo o padrão do Material UI, mas você pode seguir qualquer outro modelo de categorias que mais lhe agrada.

Partials
Diferente dos componentes, aqui nós teremos partes de uma tela, por exemplo, uma tela com uma estrutura muito grande, com algumas dezenas de sessões, podemos dividir essas partes em componentes que, na verdade, são partes de uma tela.

partials
├───diarias
├───encontrar-diarista
└───index
    ├───advantages
    ├───frequent-question
    └───presentation

Conclusão
A estrutura de pastas e arquivos com React apresentada é uma estrutura que pode ser utilizada por qualquer um. Vai te ajudar a entender a importância de se ter uma arquitetura e, também, ajudar a começar a entender como funcionam outras arquiteturas mais complexas.

Repositorio com aplicação de referência - https://github.com/arielsardinha/next-js-adote-um-pet