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

/*Essa foi fácil, gastei de 4 a 5 minutos para fazer e revisar se tem erros. Essa foi a base de objeto com a base de função */
