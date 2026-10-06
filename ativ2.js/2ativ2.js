/*Escreva uma função chamada verificarOrcamento que receba dois parâmetros: valorProduto e saldoDisponivel. A função deve retornar true se o saldo for suficiente para comprar o produto (saldo maior ou igual ao valor) e false caso contrário. */

function entrada(){
    let valorProduto = Number(prompt("Digite o valor do produto."))
    let saldoDisponivel = Number(prompt("Digite o saldo disponível."))
    let valor = verificarOrcamento(valorProduto, saldoDisponivel)
    saida(valor)

}

function verificarOrcamento(valorProduto, saldoDisponivel){
    if(saldoDisponivel >= valorProduto){
        return true
    }
    else{
        return false
    }
}

function saida(valor){
    alert(valor)
}

entrada()

/*Achei fácil também, raciocínio básico, só me confundi no enunciado devido a colocar a função saldoDisponivel e depois saldo. Primeiramente, fiz os ifs para retornar false ou true, depois fiz a entrada, recebendo os 2 valores. E por fim, a saída do valor true ou valor false.
E => valorProduto e saldoDisponivel.
P => se vai retornar true ou false.
S => mostrar true ou falso, dependendo do Processamento.*/
