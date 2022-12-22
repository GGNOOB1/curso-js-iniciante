function move(array, index, offset) {

    const position = index + offset;
    let output = [...array];
    let element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

let array = [1, 2, 3, 4];

console.log(move(array, 1, 2));