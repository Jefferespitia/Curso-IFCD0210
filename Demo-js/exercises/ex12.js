// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).


function reverse(str) {
    let result = '';
    for (let i =0; i <str.length; i++ ) {
        result += str[i] + result;
    }
    return result;
}

    console.log(reverse('casa'));
