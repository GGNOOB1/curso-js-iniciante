let numbers = [1, 2, 3, 4, 5];
let numbers2 = numbers;
let numbers3 = numbers;
let numbers4 = numbers;

// Várias soluções para esvaziar um array

// 1° Solução
numbers = [];
console.log("Solução 1:", numbers);

// 2° Solução
numbers2.length = 0;
console.log("Solução 2:", numbers2);

// 3° Solução
numbers3.splice(0, numbers3.length);
console.log("Solução 3:", numbers3);

// 4° Solução

let i = 0;

while (i < numbers4.length) {
    numbers4.pop;
}

console.log("Solução 4:", numbers4);