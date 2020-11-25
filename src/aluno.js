class Aluno{
    nome;
    nota;

    constructor(nome){
        this.nome = nome;
    }

    setNota(nota){
        this.nota = nota;
    }

    calcularMediaPonderada(){
        return ((4*this.nota.nota1 + 5*this.nota.nota2 + 6*this.nota.nota3)/(4+5+6))
    }

    isAprovado(){
        if(this.calcularMediaPonderada() >= 7){
            return true
        }
        return false;
    }
}

module.exports = Aluno;