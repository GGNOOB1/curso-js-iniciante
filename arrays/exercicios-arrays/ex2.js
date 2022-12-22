function includes(array, elementoDesejado) {
    let output = array.includes(elementoDesejado);
    let resposta = output === true ? "Existe!!" : "Não existe..";

    return resposta;
}

array = [1, 2, 3, 3, 5];

console.log(includes(array, 4));