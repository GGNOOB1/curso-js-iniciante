// O método .join junta os elementos dos index do array transformando os em uma string
// também é possível colocar como parametro um caracter para ficar entre os elementos.
// Como por exemplo:

let numbers = [1, 2, 3, 4, 5];

// Convertemos o array em string com uma virgula separando cada caracter
let numbers1 = numbers.join(",");
console.log(numbers1);

// Transformamos a string em array tendo como caracter essencial da separação a virgula
numbers1 = numbers1.split(",");
console.log(numbers1);