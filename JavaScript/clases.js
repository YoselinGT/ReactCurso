
//expresion de clase
const Rectangulo = class R {

}

//Declaracion de clase 
/*class Rectangulo {

}*/

/*function Cuadrado(){

}*/

//console.log(Rectangulo,Cuadrado)

const r = new Rectangulo();

class Chancho {
    estado = 'feliz'
    #hambre = false
    static estatico = 42
    constructor(estado = 'feliz',hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`)
    }

    static comer(){
        console.log(this.estatico,"Estoy comiendo");
    }
}

const feliz = new Chancho('feliz')
feliz.hablar()
const triste = new Chancho('triste')
triste.hablar()
const nada = new Chancho()
nada.hablar()

Chancho.comer()