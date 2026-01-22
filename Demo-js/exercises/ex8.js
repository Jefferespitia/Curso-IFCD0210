//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.

function cube(b) {
    const result = b*b*b;
//b**3
// = b * b * b
// Math.pow(b, 3)
pow(b,3)
    return result;

}


function square(b) {
    const result = b*b;
    return result
}

console.log(cube(3));
console.log(square(4));

function pow(base, exponent) {
    const result = base ** exponent;
    return result;
}

const a = 5
const b = 5

