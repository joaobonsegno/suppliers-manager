## Como fazer a aplicação funcionar
Para fazer a aplicação funcionar, basta executar simultaneamente o backend e o frontend.


## Requisitos para executar o backend
1. Acessar a pasta "backend" no Terminal.
2. Executar o comando "npm install" para instalar dependências.
3. Depois de ter as dependências instaladas com sucesso, executar o comando "npm run dev".
4. A mensagem "Server is running on port 3030..." irá aparecer no Terminal. O servidor está sendo executado com sucesso no endereço "http://localhost:3030".


## Requisitos para executar o frontend
1. Acessar a pasta "frontend" no Terminal.
2. Executar o comando "npm install" para instalar as dependências (este processo pode demorar alguns minutos).
3. Depois de ter as dependências instaladas com sucesso, executar o comando "npm start".
4. O React será inicializado em ambiente de desenvolvimento. O servidor estará sendo executado na porta 3000 (o navegador provavelmente irá abrir automaticamente a aplicação).

Caso a aplicação frontend não seja aberta automaticamente no navegador após a sua execução, basta abrir o navegador e entrar em "http://localhost:3000".

- Ps.: Caso o frontend seja executado sem o backend estar em execução, nenhum Fornecedor será exibido na aplicação e mensagens de erro irão aparecer.

**Caso haja erro para instalar as dependências**
O ambiente usado para desenvolvimento está utilizando as seguintes versões:
1. Node.js (14.18.1)
2. NPM (6.14.15)

Caso a instalação das dependências dê problema, tente utilizar estas exatas versões. A versão do Node.js e do NPM podem ser trocadas facilmente através do NVM (Node Version Manager):
- Para usuários Windows: https://github.com/coreybutler/nvm-windows
- Para usuários de outros Sistemas Operacionais: https://github.com/nvm-sh/nvm