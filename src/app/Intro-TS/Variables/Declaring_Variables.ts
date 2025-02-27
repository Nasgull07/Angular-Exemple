//======================================
//  Variables
//======================================

// En TypeScript, podemos usar "let", "var" o "const" para declarar variables.
// La diferencia principal está en su alcance (scope).

function demostrarScope() {
    for (var i = 0; i < 3; i++) {
        console.log("Dentro del bloque con var:", i);
    }
    console.log("Fuera del bloque con var:", i); // ✅ Se puede acceder porque "var" tiene alcance de función

    for (let j = 0; j < 3; j++) {
        console.log("Dentro del bloque con let:", j);
    }
    // console.log("Fuera del bloque con let:", j); ❌ Error: "j" no está definida aquí
}
demostrarScope();

//======================================
//  Tipado en TypeScript
//======================================

// En JavaScript, las variables pueden cambiar de tipo dinámicamente.
let variableDinamica: any;  // "any" permite cualquier tipo de dato
variableDinamica = 9;       // Número
variableDinamica = "Hola";  // String
variableDinamica = false;   // Booleano

// En TypeScript, podemos asignar un tipo a la variable para evitar errores.
let numero: number;
numero = 10;
// numero = "texto"; ❌ Esto daría error porque "numero" solo puede contener valores numéricos.

let texto: string = "Hola TypeScript";
let esVerdadero: boolean = true;

//======================================
//  Arrays en TypeScript
//======================================

// Podemos definir un array de números de esta forma:
let numeros: number[] = [1, 2, 3, 4, 5];

// También podemos usar una sintaxis genérica:
let palabras: Array<string> = ["Hola", "Mundo"];

// Un array que puede contener diferentes tipos de datos (usando "any" o tuplas)
let mezcla: any[] = [2, "texto", true];

//======================================
//  Enum en TypeScript
//======================================

/**
 * Un enum es un conjunto de valores con nombres que representan constantes.
 * Se usa cuando tenemos un grupo de opciones limitadas y queremos darles un nombre significativo.
 */

enum Color {
    Rojo = 0, 
    Verde = 1, 
    Azul  = 2
}

// Usando el enum
console.log("Color Rojo tiene el valor:", Color.Rojo);
console.log("Color Verde tiene el valor:", Color.Verde);
console.log("Color Azul tiene el valor:", Color.Azul);

// Ejemplo práctico con enum:
enum EstadoPedido {
    Pendiente,  // 0
    Enviado,    // 1
    Entregado,  // 2
    Cancelado   // 3
}

let miPedido: EstadoPedido = EstadoPedido.Entregado;

if (miPedido === EstadoPedido.Entregado) {
    console.log("Tu pedido ha sido entregado con éxito.");
} else {
    console.log("Tu pedido aún no ha sido entregado.");
}