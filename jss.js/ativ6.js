/*Crie uma função chamada formatarPessoa que receba um objeto representando uma pessoa com as propriedades nome, idade e profissao. A função deve retornar uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e trabalho como [profissao]."*/

function formatarPessoa(objpessoa){
    return `Olá, meu nome é ${objpessoa.nome}, tenho ${objpessoa.idade} anos e trabalho como ${objpessoa.profissao}.`
}
function resolucao(){
    let objpessoa = {
        nome: prompt("Digite seu nome."),
        idade: prompt("Digite sua idade."),
        profissao: prompt("Digite sua profissao")
    }
    let frase = formatarPessoa(objpessoa)
    alert(frase)
}
resolucao()

/*Essa foi nível difícil, pois não consegui fazer retornar a frase, tive que pedir ajuda a IA ao final de fazer meu código errado, aí aprendi que podemos retornar uma frase usando variaveis com valores definidos, da forma encima. Também tinha esquecido que é preciso colocar vírgulas entre as propriedades do objeto. Então pensei que era preciso no objeto receber as propriedades e depois colocar a frase...
Entrada: propriedades do objeto.
Processamento: retornar a frase pedida.
Saída: a frase.*/