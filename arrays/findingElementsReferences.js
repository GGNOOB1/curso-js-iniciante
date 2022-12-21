const cursos = [
    { id: 1, nome: 'a' },
    { id: 2, nome: 'b' },
    { id: 3, nome: 'c' }
];

let curso = cursos.findIndex(function (curso) {
    return curso.nome === 'c';
});

console.log(curso);