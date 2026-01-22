// Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.


// Asignación de una expresión funcinonal (funcion anónima)

const multiply = function (a, b) {
    const result = a * b;
    console.log(result);
    return result;
}



const r = multiply(3,5); 
console.log(r);


// Asignación de una expresión de funcion arrow  (funcion anónima)

const multiplyarrow = (a, b) => {
    const result = a * b;
    console.log(result);
    return result;
}



const r2 = multiplyArrow(3,5); 
console.log(r2);
