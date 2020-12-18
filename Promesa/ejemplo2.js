let promesa = new Promise((response, reject) =>{
	console.log('Promesa pendiente');
	setTimeout(() =>{
		response('Promesa resuelta');
	},2000);
	setTimeout(() =>{
		reject('Promesa rechazada');
	},3000);
});

promesa
     .then((response)=>{
     	console.log('response: ',response);
     })
     .catch((error) =>{
     	console.log('Error: ',error);
     })