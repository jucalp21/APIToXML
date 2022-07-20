const XMLWriter = require('xml-writer');

function getXMLFormat2(arr) {
	
	const XMLW = new XMLWriter().startDocument().startElement('entries');

	arr.forEach(el => {

		let entryTag = XMLW.writeElement('Entrie')

		entryTag.writeElement('title', el.title);

	});

	console.log(XMLW.toString());

}

module.exports = getXMLFormat2;

// XMLW.startDocument().startElement('entries').writeElement('entrie', 'a');


// console.log(XMLW.toString());