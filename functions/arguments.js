// Funções possuem parâmetros e esses parâmtros são preenchidos por argumentos
// quando uma funcão é chamada

// Obs: Não é possivel passar menos do número mínimo de parâmetros
// Mas em contramedida é possivel passar mais do máximo de parâmetros permitidos

function sum(a, b) {

    let total = 0;

    for (let value of arguments) {
        total += value;
    }

    return total;
}

console.log(sum(5, 4, 4, 5, 6, 5, 7, 8));