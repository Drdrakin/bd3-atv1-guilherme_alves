const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv';

const condition = {cod_aluno: "1"};
const change = { $set: {nome: "Ricardão da Silva", cpf: "40028922000", rg: "000000000" }};

use(database);

db[collection].updateOne(
    condition,
    change
);  