/*Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).*/
function calcularAreaRetangulo(base, altura){
 let area = base * altura
 return area
}
function resolucao(){
let base = Number(prompt("Digite o valor da base."))
let altura = Number(prompt("Digite o valor da altura."))
area = calcularAreaRetangulo(base, altura)
alert("O valor da área é de " + area +".")
}
resolucao()
/*Esse foi fácil, pois é um exercício com entrada, processamento é saída igual a exercícios de c do ano passado. Só teve que acrescentar a base que aprendemos de função.
Pensei que era preciso receber a base e altura, calcular a area e enviar.
Entrada: valores de base e altura.
Processamento: calcular a área.
Saída: valor da área.*/
