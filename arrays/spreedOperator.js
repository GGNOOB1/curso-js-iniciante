/*O operador de dispersão do JavaScript ( ...) nos permite copiar rapidamente todo ou parte de um
array ou objeto existente para outro array ou objeto.*/

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array3 = [...array1, ...array2];
console.log(array3);