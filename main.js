const fetchData 			= require('./data/fetchData');
const getFormatedData	= require('./utils/formatData');
const getXMLFormat3		= require('./utils/toXML3');

const API_URL = 'https://api.publicapis.org/entries';


async function exportToXML() {

	const categoryFilter = 'Animals'; //* Valor de prueba

	const apiResponse = await fetchData(API_URL, categoryFilter);
	const formattedData = getFormatedData(apiResponse);
	
	console.log(getXMLFormat3(formattedData));

}
exportToXML();
