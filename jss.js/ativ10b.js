function verificarAprovacao(nota){
    if(nota >= 60){
        return true
    }
    else{
        return false
    }
}
function falarAprovados(listaAlunos){
    let nomesAprovados = []
    for(let objeto of listaAlunos){
        let retorno = verificarAprovacao(objeto.nota)
        if(retorno === true){
            nomesAprovados.push(objeto.nome)
        }
    }
    return nomesAprovados

}
function executarAnalise(){
    let vetor = []
for(let i = 0; i < 4; i++){
    let alunos = {
        nome: prompt("Digite o nome do aluno"),
        nota: Number(prompt("Digite a nota do aluno"))
    }
    vetor.push(alunos)
}
    let aprovados = falarAprovados(vetor)
    console.log("O total de aprovados é de " + aprovados.length + " e os alunos aprovados são: ")
    for(let nome of aprovados){
        console.log(nome)
    }
}
executarAnalise()