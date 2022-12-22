let numbers = [1, 2, 3, -5, 5, 4, -4, 2, -2, -200, 24];

// .filter = Filtra elementos especificados na expressão;
// .map = Mapeia os elementos do array da forma que você quiser
let items = numbers.filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

let items2 = ['Geraldo', 'Arhtur', 'Juju', 'Malu'];
let itemsMapeados = items2.map((nome) => {
    return { nome };
});

console.log(itemsMapeados);