let text = 12;

try {
    text = 4;
} catch (e) {
    console.log(e);
}

// trow new Error lança uma excessão
if (typeof text !== 'string') {
    throw new Error("Erro: Não é um texto..");
} else {
    console.log("Deu certo!!");
}

let text2 = 5;

if (typeof text2 !== 'string') {
    throw new Error("Erro: Não é um texto 2x2x2x2x..");
} else {
    console.log("Deu certo!!");
}
