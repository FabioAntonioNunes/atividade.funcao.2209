/* Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar. */
function ehPar(numero){
    if(numero % 2 === 0){
        return true
    }
    else{
        return false
    }

}
function resolucao(){
    let num = Number(prompt("Digite o número."))
    let caso = ehPar(num)
    if(caso === true){
        alert("O número é par.")
    }
    else{
        alert("O número é ímpar.")
    }
}
resolucao()

/*Esse foi de fácil para médio, pois é preciso pensar um pouquinho mais. Pensei que deveria colocar o %2 para achar o resto. Caso ele é 0, retorna true (depois, isso significa que ele é par) ou falso (isso significará que ele é ímpar.)
Entrada: o número.
Processamento: retorno de false para ímpar e true para par, com base no resto na divisão por 2.
Saída: valor par ou valor ímpar.*/
