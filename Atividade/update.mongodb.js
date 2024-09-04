const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

const condition = {cod_aluno: "1"};
const update = { $set: {nome: "Ricardão da Silva", cpf: "40028922000", rg: "000000000" }};

use(database);

db[collection].updateOne(
    condition,
    update
);  