//Criar as rotas do CRUD
// /routes/alunos.routes.js

const express = require('express');
const Aluno = require('../models/Aluno');

const router = express.Router();

//POST
router.post('/', async (req, res, next) => {
    try {
        const aluno = await Aluno.create(req.body);
        return res.status(201).json(aluno);
    } catch (error) {
        next(error); //Criar a rota de interceptação
    }
});

//GET

//UPDATE

//DELETE

module.exports = router;