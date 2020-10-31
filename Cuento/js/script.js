var titulo= document.getElementById('tu');
var emp = document.getElementById('btn1');
var sub= document.getElementById('ti');
var parte6=document.getElementById('part6');
var sig= document.querySelector('btPrev');

function cambiarColor() {
titulo.style.color = 'black';
titulo.style.font= 'italic bold 50px arial,serif';
titulo.style.textShadow ='-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd';
sub.style.color= '#01cccc';
emp.style.borderColor= '#00e6e6';
emp.style.backgroundColor='#00bdbd';
}


function cambiarFinal(){
	parte6.style.color='rgba(255,255,255,3)';
	parte6.style.textShadow='0 0 15px rgba(255,255,255,.55),0 0 10px rgba(255,255,255,.5)';
	parte6.style.backgroundColor='#1a1a1a';
}
document.addEventListener('mouseover', cambiarColor);
document.addEventListener('mouseover', cambiarFinal);
