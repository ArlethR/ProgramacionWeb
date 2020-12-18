//Ejemplo de solicitud sincrona con eventos mas utilizados de respuesta
//load, error, progress
//1. Se crea el objeto de solicitud XMLHttpRequest 
let xhr = new XMLHttpRequest();
//2. Se configura: solicitud-GET para URL http://localhost:3000/AJAX/archivo.txt
xhr.open('GET', 'http://localhost:3000/archivo.txt');
//3. se envia solicitud
xhr.send();
//4. Los siguientes seran invocados despues de que la respuesta sea recibida
xhr.onload = function(){
	if(xhr.status != 200){//analiza status de ka respuesta HTTP
		alert(`Error ${xhr.status}: ${xhr.statusText}`);// ejemplo. 404: Not Fount
	}else{// muestra resultado
		alert(`Listo, se recibieron ${xhr.response.length} bytes`);
	}
};

xhr.onprogress = function(event){
	if(event.lengthComputable){
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	}else{
		alert(`Recibidos ${event.loaded} bytes`); // no ser recibido longitud del contenido Content-Lenght
	}
};
xhr.onerror = function(){
	alert("Fallo solicitud")
};