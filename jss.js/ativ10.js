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
        let retorno = verificarAprovacao(objeto.nota)
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

/*Achei essa um pouco mais dificil, pois misturava objetos, arrays e funções. Mas foi legal ver a integração dos três. Pensei que tinha que criar a função para receber os nomes e notas através de um array com objetos e depois resolver o restante.
Entrada: nomes e notas dos quatro alunos.
Processamento: verfificar se o aluno está aprovado e se sim, acrescentá-lo no cálculo de aprovados.
Saída: quantidade de alunos aprovados.*/