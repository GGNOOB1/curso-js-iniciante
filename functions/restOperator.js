// Os três pontos (...) no trecho acima simbolizam o operador rest. O texto após
// o operador rest faz referência aos valores que você deseja incluir dentro de uma matriz.

function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10));