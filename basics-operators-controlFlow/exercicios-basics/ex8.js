function showProperties(obj) {

    for (key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

const person = {
    name: 'Geraldo',
    age: 19,
    sexo: 'Masculino',
    situacao: 'Cursando'
};

showProperties(person);