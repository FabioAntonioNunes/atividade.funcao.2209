/*Crie duas funções para cálculo total de um carrinho de compras:
• a) calcularSubtotalItem(item): Recebe um objeto item com as propriedades
preco e quantidade, e retorna o valor total do item (subtotal = preco ×
quantidade).
• b) calcularTotalCarrinho(carrinho): Recebe um array de objetos (itens do
carrinho). A função deve percorrer a lista, chamar internamente a função
calcularSubtotalItem para cada produto e retornar o valor total acumulado da
compra.
DATA INÍCIO: 18:18 18:42*/

function calcularSubtotalItem(item){
    let subtotal = item.preco * item.quantidade
    return subtotal
}
function objetoItem(){
    let arrayDeObjetos = []
    alert("Você irá digitar os itens do seu carrinho, quando acabar os itens, digite 0 para preço e 0 para quantidade, que automaticamente aparecerá o total do valor da compra.")
    let item = {}
    do{
    item = {
        preco: Number(prompt("Digite o preço.")),
        quantidade: Number(prompt("Digite a quantidade de " + item.preco + "."))
    }
    let subTotal = calcularSubtotalItem(item)
    alert("O valor total desse item foi R$" + subTotal + '.')
    arrayDeObjetos.push(item)
    }
    while(item.preco !== 0 || item.quantidade !== 0)
    calcularTotalCarrinho(arrayDeObjetos)
}
function calcularTotalCarrinho(itensDoCarrinho){
    let soma = 0
    for(let item of itensDoCarrinho){
        let subtotal = calcularSubtotalItem(item)
        soma = soma + subtotal
    }
    alert("O valor total acumulado foi de R$" + soma + ".")
}
objetoItem()