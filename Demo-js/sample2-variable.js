// camelCase
//kebab-case
//snake_case
// PascalCase
//CONSTANT

const PI = 3.14;
//NO EXISTE modificacion
//PI = 123 // Error de TS







// Declaración
let userAge;
console.log(userAge); // undefined
//Asignación de valor
userAge = 22;
console.log(userAge); // 22
userName = 'Jose';

//Asignación de valor
let userName = 'Pepe';

userAge = 23;

//OBJETOS
//Declaracion + asignacion
const user = {
    name: 'Luis',
    age: 24,
};

console.log(user.age); // 24
//Mutar el objeto
user.age = 25;
console.log(user.age); // 24
//user ={}
// No se puede reasignar
user.job = 'Developer';
delete user.name;
// Daria error user = 26
console.log(user);
