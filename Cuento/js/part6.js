let parte6=document.getElementById('part6');
let final= document.getElementById('fin');

function cambiarFinal(){
	parte6.style.color='rgba(255,255,255,3)';
	parte6.style.textShadow='0 0 15px rgba(255,255,255,.55),0 0 10px rgba(255,255,255,.5)';
	parte6.style.backgroundColor='#1a1a1a';
}
function mover(){
	final.style.paddingTop='300px'
}
function devolver(){
	final.style.paddingTop='';
	parte6.style.color='';
	parte6.style.textShadow='';
	parte6.style.backgroundColor='';
}
final.addEventListener('mouseover', mover);
final.addEventListener('mouseout', devolver);
document.addEventListener('mouseover', cambiarFinal);
