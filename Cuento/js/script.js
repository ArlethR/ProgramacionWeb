//variables para hacer referencias a los documentos
let siguiente=document.getElementById('btNext');
let prev=document.getElementById('btPrev');
let btn1=document.getElementById('btn1');
let titulo=document.getElementById('ti');
let sub=document.getElementById("tu");


mover();
cambiarColor();
function mover(){
	titulo.style.animation="mymove 4s 2";
}
botones();
function botones(){
	siguiente.style.alignItems = "flex-start";
	prev.style.alignItems="flex-start"
}
function cambiarColor(){
	document.p.style.backgroundColor="red";
}