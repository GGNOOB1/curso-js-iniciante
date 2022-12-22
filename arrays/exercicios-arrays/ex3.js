function except(array, excluded) {

    let saida = [];

    for (element of array) {
        if (!excluded.includes(element)) {
            saida.push(element)
        }
    }

    return saida;
}

let numeros = [1, 2, 3, 4, 5, 6];
let excessoes = [1, 2, 3];

console.log(except(numeros, excessoes));