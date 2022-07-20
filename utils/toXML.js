const XML2JS = require('xml2js');

function getXMLFormat(array) {

	const xmlBuilder = new XML2JS.Builder();
	const outputXml = xmlBuilder.buildObject(array)

	console.log(outputXml);

}

module.exports = getXMLFormat;

// var objs = [{entry: {name: "Super", Surname: "Man", age: 23}}, {name: "Super", Surname: "Man", age: 23}, {name: "Super", Surname: "Man", age: 23}];
 
// var builder = new xml2js.Builder();
// var xml = builder.buildObject(objs);

// console.log(xml)