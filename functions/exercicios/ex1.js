function some(value) {
    let result = 0;

    if (Array.isArray(value)) {
        for (number of value) {
            result += number;
        }

        return result;

    } else {
        for (let number of arguments) {
            result += number;
        }
        return result;
    }


}

console.log(some(1, 2, 2));