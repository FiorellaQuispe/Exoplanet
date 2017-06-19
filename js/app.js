'use strict';

function getPlanetList(url) {
	$.get(url,function (response) {
		response.results.forEach(function (planet) {
			$.get(planet,function (planetDetails) {
				console.log(planetDetails);
			})
		})
	})
}
/*
Utilizando Promises
 */
function getJSON(url) {
	return new Promise(function (resolve,reject) {
		$.get(url, function (response) {
			resolve(response);
		});
	});
}

getJSON('data/earth-like-results.json').then(function (response) {
	var promises = response.results.map(function (planetURL) {
		return getJSON(planetURL);
	});
	Promise.all(promises).then(function (values) {
		console.log(values);
	});
});




























