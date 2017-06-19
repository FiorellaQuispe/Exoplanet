'use strict';

function Header () {
	var container = $('<header>',{
		class: 'container-fluid',
		id:'app-header'
	});

	var row = $('<div>',{
		class: 'row container'
	});

	var col = $('<div>',{
		class: 'col-md-12'
	});

	var title = $('<h1>',{ 
		html:'Smash Faces' 
	});  

	var hr = $('<hr>');

	var description = $('<p>',{ 
		html:'Bienvenidad al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase,' + 
		'ingresando su nombre. Tienes 5 oportunidades antes de perder 1 punto y pasar a la siguiente.' 
	});


	col
		.append(title)
		.append(hr)
		.append(description);

	row.append(col);

	container.append(row);

	return container;
}

