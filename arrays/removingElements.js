const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Remove o último elemento
numbers.pop();
console.log(numbers);

// Remove o primeiro elemento
numbers.shift();
console.log(numbers);

// Remove o elemento do meio obs: O primeiro parâmetor é o index que deseja excluir
// e o segundo parâmetro a quantidade que deseja excluir
numbers.splice(1, 1);
console.log(numbers);

