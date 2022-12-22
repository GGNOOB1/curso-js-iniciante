const movies = [
    { title: 'a', year: 2018, rating: 4.7 },
    { title: 'b', year: 2018, rating: 3 },
    { title: 'c', year: 2018, rating: 7.4 },
    { title: 'd', year: 2012, rating: 3.5 }
];

let filmesFiltrados = movies.filter((value) => value.year === 2018 && value.rating > 4)
    .sort((a, b) => (a.rating - b.rating))
    .reverse()
    .map(value => value.title);

console.log(filmesFiltrados);