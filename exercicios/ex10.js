function calcularMedia(notas) {

    let soma = 0;
    let media = 0;

    for (nota of notas) {
        soma += nota;
    }

    media = soma / notas.length;

    if (media > 0 && media < 60) console.log("F");
    if (media >= 60 && media < 70) console.log("D");
    if (media >= 70 && media < 80) console.log("C");
    if (media >= 80 && media < 90) console.log("B");
    if (media >= 90) console.log("A");

}

let notas = [100, 100, 100];

calcularMedia(notas);