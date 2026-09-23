/*Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações.*/

function aplicarDesconto(valor, percentual){
    let valorfinal = valor - (valor * (0.01 * percentual))
    return valorfinal
}
function processarVenda(valorBruto){
    let valorfinal
    if(valorBruto > 100){
        let percentual = 10
        valorfinal = aplicarDesconto(valorBruto, percentual)
        alert(`O valor ajustado é de R$${valorfinal}.`)
    }
    else{
        valorfinal = ValorBruto
        alert(`O valor é R$${valorBruto}.`)
    }
    return valorfinal
}
let valor = Number(prompt("Digite o valor da venda."))
processarVenda(valor)

/*Também achei dificil, porque não conseguiu fazer por completo, pedi ajuda a IA no final e os erros principais foi esquecer de colocar o return na segunda função e escrever 0,01 ao invés de 0.01 e esquecer de definir o valorfinal para o else. Por lógica, era preciso receber o valor da venda, depois calcular o desconto e informar o valor final através do if else.
Entrada: o valor bruto.
Processamento: Calculo de desconto com 10%, e if else para se o resultado será com desconto ou não.*/