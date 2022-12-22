let numbers = [5, 3, 1, 4, 2];
console.log(numbers);

// Método .sort serve para ordenar em ordem crescente os números de um array
numbers = numbers.sort();
console.log(numbers);

// Para ordenar de forma decrescente usamos o método sort mas com os parâmetros a e b onde a função anonima
// vai verificando quem é maior e quem é menor
let numbers1 = [1, 5, 8, 3, 4, 6];
numbers1 = numbers1.sort((a, b) => {
    return b - a;
});

// Método .reverse serve para reverter a ordem do array
let numbers2 = [1, 5, 8, 3, 4, 6];
numbers2 = numbers2.reverse();
console.log(numbers2);