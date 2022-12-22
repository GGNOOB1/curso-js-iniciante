const address = {
    rua: "Rua pietro clissa",
    cidade: "Osasco",
    cep: "06266-190"
};

function showAddress() {
    for (key in address) {
        console.log(key, address[key]);
    }
}

showAddress();
