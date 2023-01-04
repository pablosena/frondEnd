
let array = [];//creamos el array vacio

function guardar(){ //creamos la funcion guardar
	const valor = document.getElementById('dato').value;
	//obtenemos el valor del array y lo almacenamos en una 
	//variable llamada valor

	array.push(valor);
	//aqui usamos el array que creamos anteriormente, y usando
	//el metodo push, insertamos el nuevo valor del array al final
	//de la lista del array


	console.log(array);
	//con este comando, podemos visualizar en la consola
	 //los datos almacenados en el array 

}