/*Crie uma função chamada exibirResumoProduto que receba um objeto
representando um item do estoque com as propriedades nome, preco e quantidade.
A função deve retornar uma string formatada no padrão:
"Produto: [nome] | Preço: R$ [preco] | Estoque: [quantidade] unidades." */

function exibirResumoProduto(a){
    alert(`Produto: ${a.nome} | Preço: R$${a.preco} | Estoque: ${a.quantidade} unidades.`)
}
function objeto(){
    let itemDoEstoque = {
        nome: prompt("Digite o nome do produto."),
        preco: prompt("Digite o nome do preço."),
        quantidade: prompt("Digite o nome da quantidade.")
    }
    exibirResumoProduto(itemDoEstoque)
}
objeto()

/*Essa foi fácil, gastei de 4 a 5 minutos para fazer e revisar se tem erros, só errei nos prompts que percebi depois. Essa foi a base de objeto com a base de função. Pensei em já fazer o alert como se já tivesse criado o objeto e depois o criei.
E => propriedades: nome, preço e quantidade.
P => (não teve)
S => string pedida. 
Adicionei o Number e o toFixed(2) que a IA sugeriu. OBS: enviei para a IA só ao final, depois que tinha terminado.

Ou também poderia ter feito assim:
function objeto(){
    let itemDoEstoque = {
        nome: prompt("Digite o nome do produto."),
        preco: prompt("Digite o preço."),
        quantidade: prompt("Digite a quantidade de estoque.")
    }
    return `Produto: ${itemDoEstoque.nome} | Preço: R$${itemDoEstoque.preco} | Estoque: ${itemDoEstoque.quantidade} unidades.`
}
let frase = objeto()
alert(frase)*/

