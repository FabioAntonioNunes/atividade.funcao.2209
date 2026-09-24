/* Escreva um programa completo para análise de uma turma contendo três
funções:
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso
contrário.
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função
verificarAprovacao para cada aluno e retorna o total de alunos aprovados.
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4
alunos (armazenando-os num array de objetos), chama contarAprovados e
exibe o total de aprovados no console.log. */

function verificarAprovacao(nota){
    if(nota >= 60){
        return true
    }
    else{
        return false
    }
}
function contarAprovados(listaAlunos){
    let quantAprovados = 0
    for(let objeto of listaAlunos){
        let retorno = verificarAprovacao(listaAlunos[objeto.nota])
        if(retorno === true){
            quantAprovados = quantAprovados + 1;
        }
    }
    return quantAprovados

}
function executarAnalise(){
    let alunos = [
        objeto1 = {
            nome: prompt("Digite o nome do 1° aluno"),
            nota: Number(prompt("Digite a nota do 1° aluno"))
        },
        objeto2 = {
            nome: prompt("Digite seu nome do 2° aluno"),
            nota: Number(prompt("Digite a nota do 2° aluno"))
        },
        objeto3 = {
            nome: prompt("Digite seu nome do 3° aluno"),
            nota: Number(prompt("Digite a nota do 3° aluno"))
        },
        objeto4 = {
            nome: prompt("Digite seu nome do 4° aluno"),
            nota: Number(prompt("Digite a nota do 4° aluno"))
        }
    ]
    let aprovados = contarAprovados(alunos)
    console.log("O total de aprovados é de " + aprovados)
}
executarAnalise()
