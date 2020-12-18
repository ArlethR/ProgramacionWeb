//Función 3
//this
function test() {
	console.log(this);
}

test();

//agregando propiedades
function test2() {
	this.miClase = 'Programacion';
}
test2();
console.log(global.miClase);

//Funciones constructoras
function Circulo(radio){
	this.radio = radio;

	this.getArea = function () {
		return Math.PI * Math.pow(this.radio,2);
	}
}

let miCirulo = new Circulo(10);
console.log(miCirulo);
let otroCirculo = new Circulo(5);
console.log(otroCirculo);
