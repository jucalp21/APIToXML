const O2X = require('object-to-xml');

function getXMLFormat3(arr) {
	
	let xmlObj = {
		'?xml version=\"1.0\" encoding=\"UTF-8\"?' : null,

		entries: arr
	}

	return O2X(xmlObj);

}

module.exports = getXMLFormat3;