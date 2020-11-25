const Turma = require('./nurma');
const Aluno = require('./aluno')
const Nota = require('./nota')

let turma = new Turma(4); // Turma com capacidade de 4 alunos
let aluno1 = new Aluno('Daniel');
let aluno2 = new Aluno('Gabriela');
let aluno3 = new Aluno('Carlos');
let aluno4 = new Aluno('Letícia');

turma.matricular(aluno1);
turma.matricular(aluno2);
turma.matricular(aluno3);
turma.matricular(aluno4);

turma.setNota(aluno1, new Nota(3,5,4));
turma.setNota(aluno2, new Nota(5,10,7));
turma.setNota(aluno3, new Nota(5,10,8));
turma.setNota(aluno4, new Nota(2,1,1));

turma.percentualAprovacao();