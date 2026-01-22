//14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.

function printMultiplicationTable(n) {
    for (let i = 0; i <= 10; i++) {
        const m = n * i;
        console.log(`${n} x ${i} = ${m}`);
    }
}



