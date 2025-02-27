//======================================
//  Interfaces en TypeScript
//======================================

/**
 * Una interfaz nos permite definir la estructura de un objeto.
 * Es útil para asegurarnos de que un objeto tenga ciertas propiedades.
 */

interface Persona {
    nombre: string;
    edad: number;
    activo: boolean;
}

// Creando un objeto con la interfaz
let usuario: Persona = {
    nombre: "Juan",
    edad: 25,
    activo: true
};

let usuario2 = (persona: Persona) => {
    //...
}

usuario2({
    nombre: "Adrian",
    edad: 19,
    activo: true
})

console.log("Usuario:", usuario);
console.log("Usuario:", usuario2);