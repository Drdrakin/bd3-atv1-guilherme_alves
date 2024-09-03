const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv';

use(database);

db[collection].insertMany(
    [
        {
            "cod_aluno":"3",
            "nome": "Os Robôs da Alvorada",
            "cpf": "Isaac Asimov",
            "rg": "Em meio à mais evoluída colônia humana fora da Terra, ocorre um crime sem precedentes: um robô humaniforme é assassinado, colocando em xeque a reputação de um importante estudioso daquele planeta, único suspeito do crime.",
            "telefone_aluno":"99190-3480",
            "telefone_responsável": "99190-3480",
            "email":"Ficção Científica",
            "data_nascimento": ""
        },
    ]
);