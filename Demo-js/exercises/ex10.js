// 10. Crea una función que imprima por consola un número al azar entre 0 y 10.


    //Math.floor(5.9999) //5
    //Math.trunc(5.9999) //5
    //Math.ceil(5.0001) //6
    //Math.round(5.6) //6

function randomNumber() {
    return Math.floor(Math.random() * 11)
}
console.log(randomNumber())

for (let i = 1; i <= 10; i++) {
    console.log(randomNumber())
} 

