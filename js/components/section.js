'use strict';

function Section() {

	var containerSection = $('<section>',{
		class: 'container-fluid',
		id:'app-print'
	});

	var row = $('<div>',{
		class: 'row center-box',
		html:'hola fiorella'
	});

	var colLeft = $('<div>',{
		class: 'col-md-6'
	});

	var colRight = $('<div>',{
		class: 'col-md-6'
	});

	row
		.append(colLeft)
		.append(colRight);

	containerSection.append(row);

	return containerSection;
}