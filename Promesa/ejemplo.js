let promesa = new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log('Hola!!');
		resolve();
	}, 2000);
})

.then(function(){
	setTimeout(function(){
		console.log('Te quiero');
	}, 3000);
})
.then(function(){
	setTimeout(function(){
		console.log('bailemos');
	}, 4000);
})
.catch(function(error){
		console.log('Se detecto un error', error);
	
});
promesa.then();