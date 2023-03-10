function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    } else if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return "Fizz";
    } else if (input % 5 === 0) {
        return "Buzz";
    } else if (input % 3 != 0 || input % 5 != 0) {
        return input;
    } else {
        return "Error";
    }
}

const output = fizzBuzz(15);
console.log(output);