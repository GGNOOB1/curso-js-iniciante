function qtndVezes(array, elementoDesejado) {

    let contador = 0;

    for (element of array) {

        if (element === elementoDesejado) {
            contador++;
        }

    }

    return contador;
}

let numbers = [1, 2, 3, 1, 1, 5, 4, 7, 9, 9, 9, 9, 2, 4, 5, 13];

console.log(qtndVezes(numbers, 9));