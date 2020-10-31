let titulo= document.getElementById('tu');
let emp = document.getElementById('btn1');
let sub= document.getElementById('ti');
let completo= document.getElementById('lo');
function cambiarColor() {
titulo.style.color = 'black';
titulo.style.font= 'italic bold 50px arial,serif';
titulo.style.textShadow ='-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd';
sub.style.color= '#01cccc';
emp.style.borderColor= '#00e6e6';
emp.style.backgroundColor='#00bdbd';
}
function mover(){
completo.style.marginTop='0px';
}
function devolver(){
completo.style.marginTop='';	
titulo.style.color='';
titulo.style.font='';
titulo.style.textShadow='';
sub.style.color='';
emp.style.borderColor='';
emp.style.backgroundColor='';
}
document.addEventListener('mouseover', mover);
completo.onclick=devolver;
document.addEventListener('mouseover', cambiarColor);