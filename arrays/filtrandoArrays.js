let numbers = [1, 2, 3, -5, 5, 4, -4, 2, -2, -200, 24];

// Filtra elementos especificados na expressão;

let filtrado = numbers.filter((value) => {
    return value >= 0;
});

console.log(filtrado);