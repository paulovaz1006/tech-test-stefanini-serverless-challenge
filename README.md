# Serverless Challenge 
## Sobe o desafio
Este é um sistema CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, utilizando tecnologias como Serverless, TypeScript, Jest para testes e Swagger para documentação da API seguindo os requisitos do teste tecnico https://github.com/mvdornellas/serverless-challenge. Este README irá orientá-lo na configuração e utilização do sistema.

## Requisitos
Antes de começar, certifique-se de que você tem o Node.js e o npm instalados em seu sistema. Caso contrário, você pode baixá-los em nodejs.org.

## Instalação
Execute o seguinte comando para baixar as dependências do projeto:
- npm install

## Migrações
Para criar ou atualizar o banco de dados, você pode usar o TypeORM. Certifique-se de configurar as informações do banco de dados em src/data-source.ts antes de executar as migrações. Em seguida, execute o seguinte comando:
- npm run typeorm migration:run -- -d src/data-source.ts


## Desenvolvimento Local
Você pode rodar o projeto localmente usando o seguinte comando:
- npm run dev

O servidor local será iniciado e estará disponível em 
- http://localhost:3000.

## Testes
Os testes unitários são executados usando o Jest. Para rodar os testes, use o seguinte comando:
- npm run test

## Documentação da API
A documentação da API é gerada automaticamente com o Swagger. Para acessar a documentação, inicie o servidor local com npm run dev e vá para http://localhost:3000/swagger em seu navegador.

## Implantação em Servidor Serverless AWS
Para implantar o sistema em um servidor Serverless na AWS, certifique-se de configurar as credenciais AWS em sua máquina. Em seguida, execute o seguinte comando:
- npm run deploy

Isso implantará o sistema na AWS e disponibilizará a API na nuvem.