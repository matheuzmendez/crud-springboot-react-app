# Lista de Funcionários

### Tecnologias utilizadas

- Java 11
```
Openjdk version "11.0.11" 2021-04-20
OpenJDK Runtime Environment AdoptOpenJDK-11.0.11+9 (build 11.0.11+9)
OpenJDK 64-Bit Server VM AdoptOpenJDK-11.0.11+9 (build 11.0.11+9, mixed mode)
```
- Springboot
- React
- MySQL Workbench
- Postman

### Desafio

O desafio era construir duas aplicações que se comuniquem entre si por meio de qualquer protocolo e que ambas possuam API’s para entrada e consulta dos dados trocados nesta comunicação. Criei um backend somente com as informações básicas de um funcionário, como nome, último nome e email. Para o frontend utilizei o react para criar uma tela de listagem de todos funcionários, uma para editar funcionário e outra para visualizar individualmente cada funcionário. As duas aplicações se comunicando via protocolo REST.

### Arquitetura da Aplicação

**React**

- Router
- Components
- Service (Axios, HTTP, Library)

**Springboot**

- Controller Layer
- Service Layer
- Repository/DAO Layer

### Imagens da Aplicação

**Listagem de Funcionários (GET)**
![image](https://user-images.githubusercontent.com/41091108/191026123-9679f64c-8cf4-47d7-870f-25a164791941.png)

**Atualizar Funcionário (PUT)**
![image](https://user-images.githubusercontent.com/41091108/191027392-9c57fe8c-3899-4668-b57f-85e8173775e4.png)

**Visualizar Funcionário (GET/ID)**
![image](https://user-images.githubusercontent.com/41091108/191027686-c6cb847d-6ec1-4741-90c0-fa46d53c6d94.png)

**Adicionar Funcionário (POST)**
![image](https://user-images.githubusercontent.com/41091108/191027855-0614ef1e-1b64-4f8c-a9f7-f02425913dc7.png)

**Remoção de Funcionário (DELETE)**

![image](https://user-images.githubusercontent.com/41091108/191028315-9064da7c-e5f1-49f5-889d-20caf04a4c7c.png)

Neymar foi removido em comparação a primeira imagem.
