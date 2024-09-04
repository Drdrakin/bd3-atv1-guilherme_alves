const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv';

use(database);

db[collection].insertMany(
    [
        {
            "cod_aluno": "1",
            "nome": "Bruno Ferreira da Silva",
            "cpf": "18537292472",
            "rg": "359353852",
            "telefone_aluno": "99190-3480",
            "telefone_responsável": "99190-3480",
            "email": "bruno2002@gmail.com",
            "data_nascimento": "10/10/2002"
        },
        {
            "cod_aluno": "2",
            "nome": "Maria Oliveira Santos",
            "cpf": "12345678901",
            "rg": "987654321",
            "telefone_aluno": "98234-5678",
            "telefone_responsável": "98234-5678",
            "email": "maria.oliveira@gmail.com",
            "data_nascimento": "15/03/2003"
        },
        {
            "cod_aluno": "3",
            "nome": "Lucas Almeida Souza",
            "cpf": "23456789012",
            "rg": "876543210",
            "telefone_aluno": "99345-6789",
            "telefone_responsável": "99345-6789",
            "email": "lucas.almeida@gmail.com",
            "data_nascimento": "22/06/2004"
        },
        {
            "cod_aluno": "4",
            "nome": "Ana Clara Martins",
            "cpf": "34567890123",
            "rg": "765432109",
            "telefone_aluno": "99456-7890",
            "telefone_responsável": "99456-7890",
            "email": "ana.clara@gmail.com",
            "data_nascimento": "30/11/2005"
        },
        {
            "cod_aluno": "5",
            "nome": "Pedro Henrique Costa",
            "cpf": "45678901234",
            "rg": "654321098",
            "telefone_aluno": "99567-8901",
            "telefone_responsável": "99567-8901",
            "email": "pedro.henrique@gmail.com",
            "data_nascimento": "05/01/2006"
        },
        {
            "cod_aluno": "6",
            "nome": "Juliana Pereira Lima",
            "cpf": "56789012345",
            "rg": "543210987",
            "telefone_aluno": "99678-9012",
            "telefone_responsável": "99678-9012",
            "email": "juliana.pereira@gmail.com",
            "data_nascimento": "18/07/2007"
        },
        {
            "cod_aluno": "7",
            "nome": "Ricardo Fernandes Araújo",
            "cpf": "67890123456",
            "rg": "432109876",
            "telefone_aluno": "99789-0123",
            "telefone_responsável": "99789-0123",
            "email": "ricardo2034@gmail.com",
            "data_nascimento": "12/09/2008"
        },
        {
            "cod_aluno": "8",
            "nome": "Larissa Gomes da Silva",
            "cpf": "78901234567",
            "rg": "321098765",
            "telefone_aluno": "99890-1234",
            "telefone_responsável": "99890-1234",
            "email": "larissa1998@gmail.com",
            "data_nascimento": "23/04/2009"
        },
        {
            "cod_aluno": "9",
            "nome": "Carlos Eduardo Rocha",
            "cpf": "89012345678",
            "rg": "210987654",
            "telefone_aluno": "99901-2345",
            "telefone_responsável": "99901-2345",
            "email": "carlos.eduardo29@gmail.com",
            "data_nascimento": "07/12/2010"
        },
        {
            "cod_aluno": "10",
            "nome": "Fernanda Silva Andrade",
            "cpf": "90123456789",
            "rg": "109876543",
            "telefone_aluno": "90012-3456",
            "telefone_responsável": "90012-3456",
            "email": "fernanda.silva@gmail.com",
            "data_nascimento": "29/08/2011"
        }
    ]
);