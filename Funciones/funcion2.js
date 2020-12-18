//Función 2
//Fabrica de funciones
function crearMultiplicador(multiplicador){
	let miFuncion = function(x){
		return multiplicador * x;
	}
	return miFuncion;
}

let multiplicadorx3 = crearMultiplicador(3);
console.log(multiplicadorx3(30));

let duplicar = crearMultiplicador(2);
console.log(duplicar(100));

//Pasando funcion argumentos.
function realizaOperacion(x,operacion){
	return operacion(x);
}

let resultado = realizaOperacion(5,multiplicadorx3);
console.log(resultado);

resultado = realizaOperacion(200,duplicar);
console.log(resultado);