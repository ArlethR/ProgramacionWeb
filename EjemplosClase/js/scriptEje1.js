function nuevoEstilo(){
	let colorNuevo= '';
	let fuenteNueva='';
	let x= Math.floor(Math.random()*7);
	switch(x){
		case 0:
		colorNuevo='red';
		fuenteNueva='Times New Roman';
		break;
		case 1: 
		colorNuevo='blue';
		fuenteNueva='Florence, cursive';
		break;
		case 2:
		colorNuevo='yellow';
		fuenteNueva='Verdana';
		break;
		case 3:
		colorNuevo='purple';
		fuenteNueva='Courier New';
		break;
		case 4:
		colorNuevo='cyan';
		fuenteNueva='Georgia';
		break;
		case 5:
		colorNuevo='maroon';
		fuenteNueva='Palatino';
		break;
		case 6:
		colorNuevo='lime';
		fuenteNueva='Impact';
		break;
	}
	var elem=document.getElementById('logo');
	elem.style.color=colorNuevo;
	elem.style.fontFamily=fuenteNueva;
}