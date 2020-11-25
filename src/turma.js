class Turma{
    capacidade;
    alunos = [];

    constructor(capacidade){
        this.capacidade = capacidade;
    }

    matricular(aluno){
        if(this.alunos.length < this.capacidade){
            this.alunos.push(aluno);
            return 'Matriculado com sucesso';
        }
        return 'Não foi matriculado, turma sem vagas';
    }

    exibirAlunos(){
        for(let i = 0; i < this.alunos.length; i++){
            console.log(this.alunos[i].nome);
        }
    }

    setNota(aluno, nota){
        this.alunos.forEach(a => {
            if(aluno === a){
                a.setNota(nota);
            }
        })
    }

    isAprovado(aluno){
        for(let i = 0; i< this.alunos.length; i++){
            if(aluno === this.alunos[i]){
                return aluno.isAprovado();
            }
        }
    }

    percentualAprovacao(){
        let alunosAprovados = 0;
        this.alunos.forEach(a => {
            if(a.isAprovado())
                alunosAprovados++;
        })

        return Math.round(alunosAprovados*100/this.alunos.length);
    }
}

module.exports = Turma;