const carro = {
    cor: "Vermelho",
    marca: "Tesla",
    portas: 4,
};

for (let key in carro) {
    console.log(key, carro[key]);
}

for (let key of Object.keys(carro)) {
    console.log(key);
}
