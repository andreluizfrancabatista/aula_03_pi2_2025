//./models/Aluno.js

//Criar um schema para Aluno

const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [2, "Nome muito curto"],
            maxlength: [100, "Nome muito longo"]
        },
        idade: {
            type: Number,
            required: [true, "Este campo é obrigatório"],
            min: [0, "Idade não pode ser negativa"],
            max: [150, "Idade inválida"]
        },
        curso: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            maxlength: [120, "Curso muito longo"]
        },
        createdAt: {
            type: Date, 
            default: Date.now
        }
    },
    { versionKey: false }
);

const Aluno = mongoose.model("Aluno", alunoSchema);
module.exports = Aluno;