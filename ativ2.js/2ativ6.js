/*Crie duas funções para gerenciar a fila de reprodução de um usuário:
• a) converterParaSegundos(minutos, segundos): Recebe os minutos e
segundos de uma faixa e retorna a duração total convertida apenas para
segundos (totalSegundos = (minutos × 60) + segundos).
• b) calcularTempoPlaylist(playlist): Recebe um array de objetos (onde cada
objeto é uma música com as propriedades {titulo, minutos, segundos}). A
função deve percorrer a lista de músicas, chamar internamente a função
converterParaSegundos para cada faixa e retornar a duração total de toda a
playlist em segundos.
Início: 19:20 */

function converterParaSegundos(minutos, segundos){
    let totalSegundos = (minutos * 60) + segundos
    return totalSegundos
}
function calcularTempoPlaylist(playlist){
    let totalSegundosPlaylist = 0
    for(let musica of playlist){
        let totalSegundos = converterParaSegundos(musica.minutos, musica.segundos)
        totalSegundosPlaylist = totalSegundosPlaylist + totalSegundos
    }
    alert("O total de segundos dessa playlist é de " + totalSegundosPlaylist + ".")
   
}
function arrayDeObjetos(){
    let array = []
    let limite = Number(prompt("Digite quantas músicas tem na playlist."))
    for(let i = 0; i < limite; i++){
    let objetoMusica = {
        titulo: prompt("Digite o título da música"),
        minutos: Number(prompt("Digite a quantidade de minutos.")),
        segundos: Number(prompt("Digite a quantidade de segundos."))
    }
    array.push(objetoMusica)
}
    calcularTempoPlaylist(array)
}
arrayDeObjetos()

/*Essa foi nível de fácil para médio, pois consegui fazer sem usar IA em nenhum momento, e demorei apenas 20 minutos, e fiquei feliz, momentaneamente, por isso. Mas ela puxa para o nível médio, pois é preciso ter cuidadado e tem muitos passos. Pensei em fazer a conversão, percorrer o array para calcular total de segundos e criar o array de objetos.
E => quantas músicas tem na playlist, título, minutos e segundos.
P => conversão para segundos e calcular total de segundos.
S => total de segundos da playlist. */
