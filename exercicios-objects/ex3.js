// Constructor Function
function Address(street, city, cep) {
    this.street = street;
    this.city = city;
    this.cep = cep;
}

const cep1 = new Address("Rua gg", "Osasco", "06266190");

// Factory Function
function createAddress(street, city, cep) {

    return {
        street,
        city,
        cep
    };
}

const cep2 = createAddress("Rua gg", "Osasco", "06266190");

function areEqual(address1, address2) {

    for (key1 in address1) {
        for (key2 in address2) {
            if (key1 === key2 && address1[key1] === address2[key2]) {
                return true;
            } else {
                return false;
            }
        }

    }

}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(cep1, cep2));
console.log(areSame(cep1, cep2)); 