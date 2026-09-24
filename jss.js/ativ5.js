/*Crie uma função chamada somarElementos que receba um array de números
como parâmetro, percorra o vetor, some todos os valores e retorne o total. */
function somarElementos(numeros){
    let soma = 0
    for(let numero of numeros){
        soma = soma + numero
    }
    return soma
}
function resolucao(){
    let numeros = [] 
    let a = 0
    let limite = 1
    while(limite === 1){
    numeros[a] = Number(prompt("Digite o número"))
    a = a + 1
    limite = Number(prompt("Digite 0 quando os numeros acabarem e 1 caso tenha mais numeros."))
    }
    let soma = somarElementos(numeros)
    alert("A soma desse números é" + soma)
}
resolucao()

/* Essa foi mais dificil para mim, nível médio para difícil, principalmente por não saber trabalhar direito com arrays. Pedi ajuda a IA(somente o final da resolucao do  programa) para me dizer quais são os erros. Eram 5: tratar os arrays como numeros[] (3 vezes), ter declarado let numeros[], ao invés de let numeros = [] e por último, por descuido, ter colocado um ponto final depois de soma na linha 20. Destes 5 erros, somente o do ponto eu tinha total reconhecimento de erro antes dessa atividade.
Para resolver este exercício pensei que era preciso receber todos os valores do usuário (ENTRADA), colocar um limite, colocar o numero no array através de uma variável que soma 1 a cada volta do while(PROCESSAMENTO) e por último, somar na função somarElementos usando o for of e entregar a soma(SAÍDA).*/