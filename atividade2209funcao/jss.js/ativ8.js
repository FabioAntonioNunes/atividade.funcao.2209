/*Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]".*/

function validarSenha(senha){
    if(senha.length >= 6){
        return true
    }
    else{
        return false
    }
}
function autenticarUsuario(usuario, senha){
    let validacao = validarSenha(senha)
    if(validacao){
        return `Acesso concedido para ${usuario}`
    }
    else{
        return `Senha muito curta para o usuario ${usuario}`
    }
}
let usuario = prompt("Digite o usuário.")
let senha = prompt("Digite a senha")
let frase = autenticarUsuario(usuario, senha)
alert(frase)

/*Essa achei média, novamente teve erros diagnosticados pela IA: ao invés de senha.length coloquei ValidarSenha.lenght e trocar as crases por aspas. Pesquisei assim na IA no início: qual a função de JavaScript que calcula quantos caracteres tem tal String?, aí ela me falou do lenght. Pela lógica, fui seguindo os passos ditos, e coloquei, ao final, para receber o usuario e a senha e mostrar a frase.
Entrada: usuario e senha.
Processamento: tamanho de caracteres false or true, e fazer as frases com if e else com base na informação anterior se é false ou true.
Saída: A frase(acesso concedido ou sneha curta) */