// Declaração de função

// No JS existe um termo chamado "Hoisting" que é o processo que o mecanismo
// do JS faz que automaticamente move todas as declarações de funções para o
// topo do código
function walk() {
    console.log("Andar!");
}

// Função com expressão anônima
let run = function () { console.log("Andar!") };

// Função com expressão
let run1 = function walk() { console.log("Andar!") };

walk();
run();
run1();