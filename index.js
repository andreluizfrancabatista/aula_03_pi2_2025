const express = require('express'); //npm install express --save
const mongoose = require('mongoose'); //npm install mongoose --save
const dotenv = require('dotenv'); //npm install dotenv --save
const conectaDB = require('./db'); 
const alunosRouter = require('./routes/alunos.routes'); //Rotas

const port = 3000;

const app = express();

app.use(express.json());

dotenv.config();

conectaDB(); //Fazendo a conexão com o Mongodb

app.get('/', (req, res) => {
    res.json({message: "hello world"});
});

//Rotas
app.use('/alunos', alunosRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});