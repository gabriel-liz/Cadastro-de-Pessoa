[[_TOC_]]

## Database

O banco de dados utilizado é o PostgreSQL. 

- Iniciar o docker (caso não esteja iniciado):

`sudo systemctl start docker`


- Executar o docker-compose no mesmo local onde encontra-se o docker-compose.yml, para iniciar o container do banco de dados e também o container do adminer para acesso ao banco pela interface web (http://localhost:8080):

`sudo docker-compose up`



## Backend:

O framework utilizado é o Spring Boot, com maven para gerenciamento de dependências.

- Baixar as dependências e fazer o build do projeto:

`mvn clean install`


- Iniciar a aplicação (http://localhost:8081):

`java -jar target/teste-0.0.1-SNAPSHOT.jar`



## Frontend:

O framework utilizado no frontend é o Angular 6.0.8. 

- Baixar as dependências:

`npm install`


- Iniciar a aplicação:

`ng serve`

Acessar a aplicação através da URL: http://localhost:4200