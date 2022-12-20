// No javascript existe uma propriedade chamada constructor que pode ser atribuída a objetos
// Ela faz referência a uma função que foi usada para criar um objeto

let pessoa = {
    nome: "Geraldo",
    idade: 19,
    altura: 1.64,
};

function People(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
}

const pessoa1 = new People("Juju", 19, 1.75);
const pessoa2 = new People("Malu", 18, 1.66);

console.log(pessoa);
console.log(pessoa1);
console.log(pessoa2);

console.log(pessoa.constructor);
console.log(pessoa1.constructor);
