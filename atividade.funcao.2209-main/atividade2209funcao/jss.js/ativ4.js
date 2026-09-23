/* Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso"
 */
function calcularIMC(peso, altura){
    let calculo = peso / (altura * altura)
    return calculo
}
function resolucao(){
    let peso = Number(prompt("Digite o peso."))
    let altura = Number(prompt("Digite a altura."))
    let imc = calcularIMC(peso, altura)
    if(imc < 18.5){
        alert("Abaixo do peso.")
    }
    if(imc > 18.5 && imc < 24.9){
        alert("Peso normal.")
    }
    if(imc >= 24.9){
        alert("Sobrepeso.")
    }
}
resolucao()

/*Achei fácil, exercicio de fácil resolução. Lógica vimos em C ano passado + o que vimos de js e função desse ano.
Observei que era preciso receber o peso e altura, calcular, classificar por ifs e entregar. Só ficou uns 3 minutos procurando o erro e era o parâmetro da segunda função que esqueci.
Entrada: peso e altura.
Processamento: cálculo do imc.
Saída: classificação pelo imc.*/