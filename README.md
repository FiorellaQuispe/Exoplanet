# Exoplanet

Proyecto realizado con la finalidad de utilizar acciones basadas en otras acciones, es decir Promises.

```javascript
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
```


