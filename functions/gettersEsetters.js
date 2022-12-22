const person = {
    primeiroNome: "Geraldo",
    ultimoNome: "Neto",
    set nomeCompleto(value) {
        const parts = value.split(' ');
        this.primeiroNome = parts[0];
        this.ultimoNome = parts[1];
    }

};

person.nomeCompleto = "Geraldo Vicente";

console.log(person);