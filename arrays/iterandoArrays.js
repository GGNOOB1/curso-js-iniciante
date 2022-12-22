let numeros = [1, 2, 3];

// Maneiras de se percorrer arrays

for (numero of numeros) {
    console.log(numero);
}

numeros.forEach((numero, i) => {
    console.log(i + ":", numero);
});

console.log(numeros);

