const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv';

const condition = {cpf: "23456789012"};
const exclude = {"_id": 0, "cod_aluno": 0};

use(database);

db[collection].find(
    condition,
    exclude
);