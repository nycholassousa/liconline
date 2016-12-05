# Licitação Online

Este projeto consiste em um sistema gerenciador de licitação.

### Informações Importantes

Este repositório contém todo o necessário para o funcionamento do sistema: frontend e backend.

### Dependências

Para o funcionamento do sistema, precisa-se ter instalado no seu computador o [NodeJS](https://nodejs.org/) e [MongoDB](https://www.mongodb.com/).

### Executando Apenas o Frontend

Para o teste do frontend (totalmente independente do backend) você deve ir na pasta [frontend_gulp](https://github.com/nycholassousa/liconline/tree/master/frontend_gulp) e fazer os seguintes comandos para instalar as dependências do frontend:

	npm install -g bower
	npm install -g gulp
	npm install
	bower install

Após realizar esses 4 comandos separadamente, é necessário o comando para executar o frontend:

    gulp serve

Com isso, será aberto uma janela no seu navegador, onde você poderá testar todo o frontend.

### Executando a Aplicação Completa

Na pasta principal, você deve fazer os seguintes comandos:

    npm install
    npm start

Com isso, sua aplicação irá rodar normalmente.
Observação: A aplicação mongod do MongoDB deve estar em execução para que funcione corretamente.

### Importando o frontend modificado

Caso você faça alterações no frontend pela pasta frontend_gulp, você deve realizar o seguinte comando:

	gulp build:dev

Após a finalização do comando, você deve copiar tudo da pasta dist (nova pasta criada) para a pasta public, que está na raiz do projeto