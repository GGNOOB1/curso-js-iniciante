const numbers = [-1, -2, -1, -4, -5];
const numbers2 = [1, 2, 3, 4, -5];

// every verifica todos os elemento em um array para ver se corresponde as condições da função
const tudoPositivo = numbers.every((value) => {
    return value >= 0;
});

const tudoNegativo = numbers2.every((value) => {
    return value < 0;
});

// Some verifica se pelo menos um elemento do array atende as condiçôes
const umPositivo = numbers.some((value) => {
    return value >= 0;
});

const umNegativo = numbers2.some((value) => {
    return value < 0;
});

console.log(tudoPositivo);
console.log(tudoNegativo);

console.log(umPositivo);
console.log(umNegativo);

