# Yggdrasil 2

O Yggrasil é o sistema oficial para gerenciamento da graduação do aluno do BCC do IME-USP, contendo informações de todas as trilhas e maioria das disciplinas optativas do MAC.

Ele também gera o relatório de provável formando oficial do BCC, a ser entregue na seção de alunos.

## Como contribuir

### Rodando localmente

Basta clonar o repositório, instalar as dependências com `npm install` e depois ligar o servidor com `npm start`. Você precisa ter o Node.js instalado para que esses comandos funcionem. Depois disso, basta entrar em `localhost:3000` no seu browser.

### Modificar trilhas

Caso alguma matéria seja incluída ou retirada de uma trilha, ou mude algum outro requisito (tipo número mínimo de matérias de um bloco), basta acessar o arquivo de configuração da trilha desejada dentro da pasta `/tracks` e fazer as mudanças desejadas. As configurações são bastante intuitivas.

Após as mudanças, é necessário refazer o deploy do projeto.

### Adicionar matérias novas

Caso alguma matéria nova seja adicionada ao sistema, após adicioná-la no arquivo da trilha relacionada, é preciso rodar de novo o crawler que busca as informações dela no Jupiter (mais detalhes abaixo). Além disso, ela precisa de um ícone, então você deve fuçar em sites de Ragnarok, procurar as listas de habilidades de cada classe, encontrar algum ícone de habilidade que ache legal e salvar na pasta `/public/skills` com o nome sendo o código da matéria e a extensão `.gif`.

### Crawler

O arquivo 'jupiterCrawl.js`é um crawler que irá carregar todas as matérias que fazem parte das trilhas (inclusive as obrigatórias) e buscará informações sobre elas no Jupiter: nome, créditos, ementa e pré-requisitos. Essas informações são salvas em um arquivo`allclasses.json`que é usado pelo sistema. Esse crawler deve ser rodado (`npm run crawler`) sempre que uma nova matéria é adicionada ao Yggdrasil, e também idealmente a cada começo de semestre para pegar updates que acontecem nas matérias ao longo do ano.

O crawler demora um pouco pra rodar e gasta bastante CPU. Após usá-lo, é necessário refazer o deploy do projeto.

### Deploy

Para fazer o deploy, basta rodar `npm run deploy` e o sistema será automaticamente buildado e enviado para o GitHub Pages.

### Versionando

Ao fazer qualquer modificação nas trilhas ou matérias, abra um PR (pull request) aqui no Yggdrasil para manter a codebase sempre atualizada.
