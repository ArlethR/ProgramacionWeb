let btn1= document.getElementById('boton1');
let btn2 = document.getElementById('boton2');
var tx1= document.getElementById('txt1');
var tx2= document.getElementById('txt2');


function limpiar(){
	tx1.value='';
	tx2.value='';
}

function deseleccionar_todo(){
   for (i=0;i<document.f1.elements.length;i++)
      if(document.f1.elements[i].type == "checkbox")
         document.f1.elements[i].checked=0
}

function enviar(){
alert("Datos guardados!"); 
}

btn2.addEventListener('click', limpiar);

btn2.addEventListener('click', deseleccionar_todo);

btn1.addEventListener('click', enviar);