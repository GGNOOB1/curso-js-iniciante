function arrayPorRange(min, max) {

    let output = [];

    for (let i = min; i <= max; i++) {
        output.push(i);
    }

    return output;
}

console.log(arrayPorRange(-5, 5));