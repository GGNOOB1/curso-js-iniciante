// Quando limitamos variáveis com let ou const seu escopo é limitado ao bloco
{
    let a = 1;
    const b = 2;
}

// Quando declaramos fora do bloco de códigos as variáveis e constantes são acessíveis para todo o código
const a = 1;
let b = 2;

console.log(a, b);