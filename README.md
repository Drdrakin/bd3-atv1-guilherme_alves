# Primeira atividade de banco de dados

O propósito dessa atividade é exercitar os conceitos abordados em aulas. A tabela sql com os seguintes campos foi traduzida para NoSQL:

| tbl_alunos  | tipo | 
| ------------- | ------- |
| cod_aluno (pk) | INT |
| cod_turma (fk)  | INT |
| nome| VARCHAR |
|cpf| VARCHAR |
|rg| VARCHAR |
|telefone_aluno| VARCHAR |
|telefone_responsável| VARCHAR |
|email| VARCHAR | 
|data_nascimento| TIMESTAMP |

Após isso, os scripts encontrados em ```Atividade``` foram criados para realizar as operações de CRUD em conexão com o Atlas MongoDB for VSCode.

Exercício A - Inserir 10 alunos = ```insert.mongodb.js```\
Exercício B - Listar todos os alunos = ```list-all.mongodb.js```\
Exercício C - Listar um aluno pelo CPF excluindo o campo cod_aluno = ```list-by-cpf.mongodb.js```\
Exercício D - Alterar o Nome, RG e CPF de UM aluno = ```update.mongodb.js```\
Exercício E - Excluir um aluno = ```delete.mongodb.js```
