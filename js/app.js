'use strict';

function render(root) {
	root.empty();
	var wrapper = $('<div>',{
		class: 'wrapper'
	});
	wrapper
		.append(Header())
		.append(Section());

	root.append(wrapper);
}

$(function() {
	var root = $('#root');
	render(root);
});