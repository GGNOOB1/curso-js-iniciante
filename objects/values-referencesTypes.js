// Value types: Number, String, Boolean, Null, NaN, Undefined, Symbol
// References types: Object, Function, Array

// Tipos primitivos são copiados por valor
// Objetos são copiados por referencias

let x = 10;
let y = x;

x = 20;

let z = {
    value: 10,
};

z.value++;

console.log(x);
console.log(y);

console.log(z);
