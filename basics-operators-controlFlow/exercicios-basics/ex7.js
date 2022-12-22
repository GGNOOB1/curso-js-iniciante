function countTruthy(array) {

    let count = 0;

    for (value of array) {
        if (value) count++; 
    }
    console.log(count);
}

let array = [1,2,3,4, '', null, NaN, 4,6,8];

countTruthy(array);