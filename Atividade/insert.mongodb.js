const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv';

use(database);

db[collection].insertMany(
    [
        {
            "cod_aluno": "3",
            "nome": "Bruno Ferreira da Silva",
            "cpf": "18537292472",
            "rg": "359353852",
            "telefone_aluno": "99190-3480",
            "telefone_responsável": "99190-3480",
            "email": "bruno2002@gmail.com",
            "data_nascimento": "10/10/2002"
        },
    ]
);