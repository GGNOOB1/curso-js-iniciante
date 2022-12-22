// function maxNumberInArray(array) {

//     const maxNumber = array.sort((a, b) => a - b).pop();
//     return maxNumber;
// }

// let numbers = [1000, 2, 3, 4, 5, 5, 6, 7, 8, 9, 32, 90, 45, 0, 10];

// console.log(maxNumberInArray(numbers));

function maxNumberInArray(array) {

    return array.reduce((a, b) => a > b ? a : b);

}

let numbers = [1000, 2, 3, 4, 5, 5, 6, 7, 8, 9, 32, 90, 45, 0, 10];

console.log(maxNumberInArray(numbers)); 