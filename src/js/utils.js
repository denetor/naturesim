/**
 * Read a JSON file from an URI
 *
 * @param {string} uri
 * @param {function(err, fileContent)} callback
 */
function loadJsonFromUri(uri, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', uri, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		var status = xhr.status;
		if (status === 200) {
			callback(null, xhr.response);
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
}
