const Turma = require('./turma');
const Aluno = require('./aluno');
const Nota = require('./nota');

describe('Matricular-se em uma turma', () => {
    it('O aluno tenta se matricular em uma turma com vagas abertas' , () => {
        let turma = new Turma(10); // Turma com capacidade de 10 alunos
        let aluno = new Aluno('Daniel');
        expect(turma.matricular(aluno)).toEqual('Matriculado com sucesso');
    })

    it('O aluno tenta se matricular em uma turma com vagas fechadas' , () => {
        let turma = new Turma(1); // Turma com capacidade de 1 alunos
        let aluno1 = new Aluno('Daniel');
        let aluno2 = new Aluno('Gabriela');

        turma.matricular(aluno1);
        expect(turma.matricular(aluno2)).toEqual('Não foi matriculado, turma sem vagas');
    })

    it('Mostrar percentual de alunos aprovados em uma turma' , () => {
        let turma = new Turma(4); // Turma com capacidade de 4 alunos
        let aluno1 = new Aluno('Daniel');
        let aluno2 = new Aluno('Gabriela');
        let aluno3 = new Aluno('Carlos');
        let aluno4 = new Aluno('Letícia');

        turma.matricular(aluno1);
        turma.matricular(aluno2);
        turma.matricular(aluno3);
        turma.matricular(aluno4);

        turma.setNota(aluno1, new Nota(6,4,1));
        turma.setNota(aluno2, new Nota(5,10,7));
        turma.setNota(aluno3, new Nota(5,10,8));
        turma.setNota(aluno4, new Nota(2,1,1));

        expect(turma.percentualAprovacao()).toEqual(50);
    });

    it('Deve mostrar um aluno com notas 6, 8, 9 aprovado' , () => {
        let turma = new Turma(1);
        let aluno1 = new Aluno('Daniel');

        turma.matricular(aluno1);
        turma.setNota(aluno1, new Nota(6,8,9));

        expect(turma.isAprovado(aluno1)).toEqual(true);
    })

    it('Deve mostrar um aluno com notas 4, 2, 3 reprovado' , () => {
        let turma = new Turma(1);
        let aluno1 = new Aluno('Daniel');

        turma.matricular(aluno1);
        turma.setNota(aluno1, new Nota(4,2,3));

        expect(turma.isAprovado(aluno1)).toEqual(false);
    })
})