const AXIOS = require('axios');

async function fetchData(url, categoryFilter) {

	const formattedURL = `${ url }?Category=${ categoryFilter }`;

	try {
		const response = await AXIOS.get(formattedURL)
	
		return response.data
												? response.data
												: null;
		
	} catch (err) {
		console.error(err);
	}
}

module.exports = fetchData;