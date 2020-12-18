class Media{
	constructor(titulo,calificaciones){
		this._titulo = titulo;
		this._prestado = false;
		this._calificaciones = [calificaciones];
	}
	get titulo(){
		return this._titulo;
	}
	get prestado(){
		return this._prestado;
	}
	get calificaciones(){
		return this._calificaciones;
	}
	set titulo (titulo){
		this._titulo = titulo;
	}
	set prestado(prestado){
		this._prestado = prestado;
	}
	obtenerCalificacionPromedio(){
		var suma = 0;
		var promedio;
		for (var i = 0; i < this._calificaciones.length; i++) {
			suma=suma+this._calificaciones[i];
		}
		promedio=suma/this.calificaciones.length;
		return promedio;
	}
	cambiarEstatusPrestado(estatus){
		this._prestado = estatus;
	}
	agregarCalificacion(calificacion){
		if (calificacion<=10) {
			return this._calificaciones.push(calificacion);
		} else {
			console.log("---La calificación que desea ingresar no esta dentro de lo permitido.\nSe le asigna un 10 en su lugar.--");
			return this._calificaciones.push(10);}
		
	}
}

class Libro extends Media{
	constructor(titulo,calificaciones){
		super(titulo,calificaciones);
		this._autor;
		this._paginas;
	}
	get autor(){
		return this._autor;
	}	
	get paginas(){
		return this._paginas;
	}
}
class Video extends Media{
	constructor(titulo,calificaciones){
		super(titulo,calificaciones);
		this._director;
		this._duracion;
	}
	get director(){
		return this._director;
	}
	get duracion(){
		return this._duracion;
	}
}
class CD extends Media{
	constructor(titulo,calificaciones){
		super(titulo,calificaciones);
		this._artista;
		this._cancion=[];
	}
	get artista(){
		return this._artista;
	}
	get cancion(){
		return this._cancion;
	}
}
const novela = new Libro('Orgullo y prejuicio', 10);
novela._autor= 'Jane Austen';
novela._paginas=569;
console.log(`El libro lleva por titulo ${novela.titulo}
	\nEl autor(a) es: ${novela.autor},cuenta con ${novela.paginas} páginas. 
	\nEl público le da una calificacion de ${novela.calificaciones}.`);
novela.cambiarEstatusPrestado(true);
novela.agregarCalificacion(8.5);
console.log(`Se agrego una nueva calificación, ahora son: ${novela.calificaciones}.`);
console.log(`Calificación promedio: ${novela.obtenerCalificacionPromedio()}.`);
console.log(`Esta disponible: ${novela.prestado}.`);
console.log('-----------------------------------------------------------------------')
const musica = new CD('Back in Black',9);
musica._artista='AC/DC';
musica._cancion=['Hells Bells','\nShoot to Thrill','\nWhat Do You Do for Money Honey',
'\nGivin the Dog a Bone','\nLet Me Put My Love Into You','\nBack in Black'];

console.log(`El titulo del albúm es: ${musica.titulo}.\nEl artista o nombre de la banda es: ${musica.artista}
	\nLas canciones que se pueden encontrar en el albúm son: \n${musica.cancion}.
	\nLa calificiación que le otorgo es de ${musica.calificaciones}.`);
musica.agregarCalificacion(80);
console.log(`Se agrego otra calificación, ahora las calificaciones son:  ${musica.calificaciones}.`);
console.log(`Calificación promedio: ${musica.obtenerCalificacionPromedio()}.`);
console.log(`Esta disponible: ${musica.prestado}.`);

console.log('-----------------------------------------------------------------------')
const serie= new Video('Lucifer',10);
serie._director= "Tom Kapinos";
serie._duracion= 56;
console.log(`La película o serie se llama: ${serie.titulo}
\nSu duración (por capítulo en case de ser serie) es: ${serie.duracion} minutos.
\nEs dirigida por: ${serie.director}.`);
serie.agregarCalificacion(9.5);
console.log(`Se agrego otra calificación, ahora las calificaciones son:  ${musica.calificaciones}.`);
console.log(`Calificación promedio: ${serie.obtenerCalificacionPromedio()}.`);
console.log(`Esta disponible: ${serie.prestado}.`);

