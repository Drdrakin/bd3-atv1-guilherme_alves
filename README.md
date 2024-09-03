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
|data_nascimento| TIMESTAMP(100) |

Após isso, os scripts encontrados em ```/Atividade``` foram criados para realizar as operações de CRUD em conexão com o Atlas MongoDB for VSCode.