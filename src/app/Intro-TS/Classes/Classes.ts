//======================================
//  Clases en TypeScript
//======================================

/**
 * TypeScript permite usar clases, como en lenguajes orientados a objetos (OOP).
 */

class Animal {
    nombre: string;
    
    constructor(nombre?: string) { //Para hacer la variable del constructor opcional se escribe nombre?: string
        this.nombre = nombre || "Sin nombre";
    }

    hacerSonido(): void {
        console.log(this.nombre + " hace un sonido.");
    }
}

let perro = new Animal("Perro");
perro.hacerSonido();

export class Usuario {


    constructor(private edad: number, private nombre: string) {
        this.edad = edad;
        this.nombre = nombre;
    }

    imprimir() {
        console.log("Usuario:", this.nombre, " - ", this.edad);
    }

    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre: string) {
        this.nombre = nombre;
    }
    get Edad() {
        return this.edad;
    }
    set Edad(edad: number) {
        if (edad <= 0) {
            throw new Error("La edad no puede ser menor o igual a 0.");
        }
        this.edad = edad;
    }
}

let usuario1 = new Usuario(25, "Juan");
let edad = usuario1.Edad;
usuario1.Nombre = "Pedro";


