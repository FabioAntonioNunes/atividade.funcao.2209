/*Crie uma função chamada calcularJurosSimples que receba três parâmetros: capital, taxa (em porcentagem) e tempo (em meses). A função deve calcular e retornar o valor dos juros:
juros=capital×(taxa / 100)×tempo */

function entrada(){
    let capital = Number(prompt("Digite o valor de capital."))
    let taxa = Number(prompt("Digite o valor de taxa, em porcentagem."))
    let tempo = Number(prompt("Digite o valor de tempo, em meses."))
    let juros = calcularJuroSimples(capital, taxa, tempo)
    saida(juros)
    
}
function calcularJuroSimples(capital, taxa, tempo){
    let juros = capital * (taxa / 100) * tempo
    return juros
}
function saida(juros){
    alert("O valor de juros é de R$" + juros + ".")
}
entrada()

/*Essa achei fácil, porque foi simples. Fui pela lógica de receber capital, taxa e tempo, executar calcularJUroSimples, levando como parâmetros ou 3 elementos anteriores, usando a fórmula mostrada e mostrada para o usuário o velor final de juros.
Entrada: capital, taxa e tempo.
Processamento: calcular o valor de Juro Simples.
Saída: O valor de juro. */