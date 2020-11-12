let indice= document.getElementById('indice');
let menos=document.getElementById('btnMas');
let imagenMenos=document.getElementById('imagen')
let links=document.getElementById('link');
let btnver= document.getElementById('btnVer');
let ver=document.getElementById('ver');
let imMenos=document.getElementById('imagen2');
let nom=document.getElementById('nombre');
let carac=document.querySelector('h2.cara');

function mostrarTexto(){
	if (indice.style.display=='none') {
		imagenMenos.src='menos.png';
	    indice.style.display='block';
	    indice.style.visibility='visible';
	    links.style.backgroundColor='mistyrose';
	    //'rgba(201, 174, 212, 0.5)';
}else{
    imagenMenos.src='mas.png'
	indice.style.display='none';
	indice.style.visibility='hidden';
	links.style.backgroundColor='';
}
	
}
function mostrarTabla() {
		if (ver.style.display=='none') {
		imMenos.src='arriba.png';
	    ver.style.display='block';
	    ver.style.visibility='visible';
	    nom.innerHTML='Ver menos';
	    //'rgba(201, 174, 212, 0.5)';
}else{
    imMenos.src='bajo.png'
	ver.style.display='none';
	ver.style.visibility='hidden';
	    nom.innerHTML='Ver más';
}
}
function cambiaColor(){
	carac.style.backgroundColor='pink';
}
function regresarColor(){
	carac.style.backgroundColor='thistle';
}
menos.addEventListener('click', mostrarTexto);
btnver.addEventListener('click', mostrarTabla);
carac.addEventListener('mouseover', cambiaColor);
carac.addEventListener('mouseout', regresarColor);