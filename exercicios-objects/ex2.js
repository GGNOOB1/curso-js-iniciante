// Constructor Function
function Address(street, city, cep) {
    this.street = street;
    this.city = city;
    this.cep = cep;
}

const cep1 = new Address("Rua gg", "Osasco", "06266190");
console.log(cep1);

// Factory Function
function createAddress(street, city, cep) {

    return {
        street,
        city,
        cep
    };
}

const cep2 = createAddress("Rua gg2", "Cotia", "94149229");
console.log(cep2);