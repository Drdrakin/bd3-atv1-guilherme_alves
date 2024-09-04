const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv';

const condition = {cod_aluno: "1"}

use(database);

db[collection].deleteOne(
    condition
)
