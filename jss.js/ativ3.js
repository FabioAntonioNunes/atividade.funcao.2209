/*Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).
 */
function celsiusParaFahrenheit(temperatura){
    fahr = (temperatura * 1.8) + 32
    return fahr
}
function resolucao(){
    let celsius = Number(prompt("Digite a tempertura em Celsius."))
    fahrenheit = celsiusParaFahrenheit(celsius)
    alert(`O valor da temperatura em fahrenheit é ${fahrenheit}`)
}
resolucao()

/*
Achei fácil, pelos mesmo motivos anteriores, mesma lógica de exercios de c do ano passado.
Pensei que era preciso receber a temperatura em celsius, depois calcular, e por último entregar.
Entrada: receber a temperatura em celsius
Processamento: coverter para fahrenheit
Saída: Entregar o valor em fahrenheit.
*/