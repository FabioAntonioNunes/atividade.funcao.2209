/*Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado".
*/
function calcularMediaArray(notas){
    let soma = 0
    for(let nota of notas){
        soma = soma + nota
    }
    let media
    media = soma / notas.lenght
    return media
}
function avaliarAluno(aluno){
  let media = calcularMediaArray(aluno.nota)
  if(media >= 60){
    alert("Aprovado")
  }
  else{
    alert("Reprovado")
  }
}


let notas = []
    notas[0] =  Number(prompt("Digite a primeira nota"))
    notas[1] =  Number(prompt("Digite a segunda nota"))
    notas[2] =  Number(prompt("Digite a terceira nota"))
let aluno = {
    nome: prompt("Digite o nome do aluno"),
    nota: notas
}
avaliarAluno(aluno)

/*Achei difícil, gastei 54 minutos e me cofundi com as variaveis. Me cofundi tambem com o enunciado. Mas no final só esqueci dos alerts, que pedi a IA para achar o erro. Eu consegui observer a lógica depois: recebe os valores de notas, objeto, faz a média e depois faz o final para Aprovado ou não.
Entrada: notas e nome.
Processamento: soma de notas que permite depois a m*/

