try {
    const numbers = [1, 3, 4, 5, 5];
    const count = countOccurrences(numbers, 1);
    console.log(count);
} catch (e) {
    console.log(e);
}

function countOccurrences(array, searchElement) {

    if (!Array.isArray(array)) {
        throw new Error("Não é um array");
    }


    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);

}