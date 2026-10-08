/*Crie uma função que apresente um menu ao usuário com as seguintes opções: a. Converter de real para euro
b. Converter de euro para real
c. Converter de real para dólar
d. Converter de dólar para real
e. Fechar o programa. */


function menu(){
let opcoes = prompt("Escolha a opção. /n a. Converter de real para euro /n b. Converter de euro para real /n c. Converter de real para dólar /n d. Converter de dólar para real /n e. Fechar o programa. ")
resolucao(opcoes)
}

function resolucao(opcoes){
    let valor
    let valornovo
    switch(opcoes){
        case "a":
        valor = Number(prompt("Digite o valor em real."))
        valornovo = valor * 0.17
        alert(`R$${valor} em euro é igual a €${valornovo}.`)
        break

        case "b":
        valor = Number(prompt("Digite o valor em euro."))
        valornovo = valor / 0.17
        alert(`€${valor} em real é igual a R$${valornovo}.`)
        break

        case "c":
        valor = Number(prompt("Digite o valor em real."))
        valornovo = valor * 0.19
        alert(`R$${valor} em dólar é igual a $${valornovo}.`)
        break

        case "d":
        valor = Number(prompt("Digite o valor em dólar."))
        valornovo = valor / 0.19
        alert(`$${valor} em real é igual a R$${valornovo}.`)
        break

        case "e": 
        break
    }
}
menu()

/*Foi entre fácil e médio, porque consegui fazer, mas foi mas complicado de fazer, mas descobri que ao invés de cases com numeros, pode-se utilizar cases com letras e não é /n e sim \n.
Pensei que tinha que pedir para o usuário escrever qual sua opção de conversão após a apresentação do menu, depois faz a conversão, e ao final, observei que poderia indicar o valor de conversão para o usuário através de alerts em cada case.
E => a, b, c, d, e, a opção dentre as descritas no enunciado.
P => conversão por switch case.
S => O valor de conversão.*/