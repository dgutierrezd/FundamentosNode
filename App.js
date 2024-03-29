/**
  * Readline.
  * Librería para poder leer y recolectar la información ingresada en consola.
  **/
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// Librería para crear archivo.
const fs = require('fs');

// Arreglo con los cursos.
const {cursos} = require('./Datos');

let mostrarCurso = (index, callback) => {
	setTimeout(() => {
		datosCurso = 'Id curso: ' + cursos[index].id + '\n' + 
					 ' Nombre del curso: ' + cursos[index].nombre + '\n' +
					 ' Duración en horas: ' + cursos[index].duracionHoras + '\n' +
					 ' Valor: ' + cursos[index].valor + '\n \n';
		callback(datosCurso);
	}, 2000);
}

let mostrarCursos = () => {
	
	console.log('Cursos: ' + '\n');
	cursos.forEach(function(item, index) {
		mostrarCurso(index, callback = datosCurso => {
			console.log(datosCurso);
		if(index === cursos.length - 1)	
			inscribirCurso();
		});
	});
}

let buscarId = (id) => {
	let busqueda = cursos.find(curso => curso.id == id);

	return busqueda;
}

let inscribirCurso = (id, nombre, cedula) => {
	rl.question('Ingresa el id del curso al que quieres ingresar ', id => {
		id = id;
		console.log('Datos del curso: \n');
		console.log (buscarId(id));

		rl.question('Ingresa tu nombre ' + '\n', nombre => {
			nombre = nombre;
			rl.question('Ingresa tu cédula ' + '\n', cedula => {
				cedula, cedula;
				crearArchivo(id, nombre, cedula);
			})
		})
		
		if(!buscarId(id)) 
			console.log('No se pudo encontrar el curso.');
	});
}

let crearArchivo = (id, nombre, cedula) => {

	var texto = 'Curso: ' + id + '  ' + 
				'Nombre del estudiante: ' + nombre + '  ' +
		        'Cédula: ' + cedula;

	fs.writeFile('datos_curso.txt', texto, (err) => {
		if(err) throw err
		console.log('Se ha creado tu archivo personal exitosamente.');

		process.exit()
	});
}

mostrarCursos();