class Animal {
	constructor(nombre,edad){
		this._nombre = nombre;
		this._edad = edad;
	}
	get nombre(){
		return this._nombre;
	}
	get edad(){
		return this._edad;
	}
	set nombre(nombre){
		this._nombre = nombre;
	}
	set edad(edad){
		this._edad = edad;
	}
	static generarNombre(){
		const nombres = ['blacky','wendy','garfield','silvestre','pluto','canelo','blanca'];
		const numeroAleatorio = Math.floor(Math.random()*7);
		return nombres[numeroAleatorio];
	}
}

class Perro extends Animal{
	constructor(nombre,edad){
		super(nombre,edad);
		this._habilidades = ['ladrar'];
	}
	get habilidades(){
		return this._habilidades;
	}
	agregarHabilidades(habilidad){
		return this._habilidades.push(habilidad);
	}
}

class Gato extends Animal{
	constructor(nombre,edad){
		super(nombre,edad);
		this._comportamiento = 'normal';
	}
	cambiarComportamiento(comportamiento){
		this._comportamiento = comportamiento;
	}
	get comportamiento(){
		return this._comportamiento;
	}
}
const snoppy  = new Perro('snoppy', 5);
console.log(`Las habilidades de ${snoppy.nombre} son ${snoppy.habilidades}`);
snoppy.agregarHabilidades('traer el periodico');
console.log(`se registro habilidad nueva para ${snoppy.nombre}`);
console.log(`Ahora las habilidades de ${snoppy.nombre} son ${snoppy.habilidades}`);

const garfield = new Gato('garfield',10);
garfield.cambiarComportamiento('indiferente');
console.log(`El comportamiento de ${garfield.nombre} es ${garfield.comportamiento}\n`);

const mascotas = [];
mascotas.push(snoppy);
mascotas.push(garfield);
for (var i = 0; i < mascotas.length; i++) {
	console.log(`Nombre: ${mascotas[i].nombre} \nEdad: ${mascotas[i].edad}`);
	if (mascotas[i] instanceof Perro) {
		console.log(`Habilidades: ${mascotas[i].habilidades}\n`);
	} else {
		console.log(`comportamiento: ${mascotas[i].comportamiento}\n`);
	}
}

const nombreSugerido = Animal.generarNombre();
const nuevoPerro = new Perro(nombreSugerido,4);
console.log(`Nombre: ${nuevoPerro.nombre} \nEdad: ${nuevoPerro.edad}\n
	Habilidades: ${nuevoPerro.habilidades}`);