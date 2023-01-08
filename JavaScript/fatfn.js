function Fn(){
	this.propiedad = 'propiedad';
	return 'Chancito feliz';
}

const r = new Fn();

Fn.prototype.lala = function funcionPrototipo() {} 


//console.log(r.__proto__);


const fatFn = () => {	
	this.propiedad = "propiedad"
	const obj = {};
	console.log(this)

	return 'chanchito feliz'
}

//No se puede usar la palabra reserva de new en arrow functions
//const r1 = new fatFn()

const r1 = fatFn()

console.log(r1)
