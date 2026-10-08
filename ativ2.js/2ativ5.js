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

/*Essa foi nível médio. Tive um pouco mais de dificuldade, e ao final envie para a IA achar os erros e form os seguintes: acesso de item.preco antes de finalizar o objeto, colocar ==! ao invés de !==, item dentro do do como let, o que faz o while não receber e colocar for...in ao invés de for...of.
Depois de decodificar o enunciado (que estava um pouco confuso, dando para entender que era preciso fazer um array e objetos independentes), não sei explicar direito, mas fim o objeto, depois chamei a função calcularSubTotalItem, e adicionei o objeto ao array. Depois calcular o total e entregar.

E => item.preco e item.quantidade
P => subtotal individual para cada item e para o total final.
S => valores individuais e valor final.*/