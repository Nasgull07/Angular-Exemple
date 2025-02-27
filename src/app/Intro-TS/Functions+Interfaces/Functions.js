//======================================
//  Funciones en TypeScript
//======================================
/**
 * En TypeScript podemos especificar el tipo de los parámetros y el tipo de retorno de una función.
 */
function sumar(a, b) {
    return a + b;
}
console.log("La suma de 5 + 3 es:", sumar(5, 3));
// También podemos usar funciones que no devuelven nada (tipo "void")
function mostrarMensaje(mensaje) {
    console.log("Mensaje:", mensaje);
}
mostrarMensaje("Este es un mensaje de prueba.");
