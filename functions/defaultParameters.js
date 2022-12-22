// Parâmetros padrões são parâmetros que se não tiverem argumentos serão substituídos
// por um valor padrão definido.    

function mostrarDados(nome, idade = "Não informado", altura = "Não informado") {

    let pessoa = {
        nome,
        idade,
        altura
    }

    return pessoa;
}

console.log(mostrarDados("Geraldo"));