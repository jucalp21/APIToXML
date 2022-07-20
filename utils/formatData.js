function getFormatedData(responseArr) {

	const formatedDataArr = [];

	responseArr.entries.forEach(entry => {
		let newEntrie = {
			entrie: {
				title: 				entry.API,
				description: 	entry.Description,
				category: 		entry.Category,
				url: 					entry.Link
			}
		}

		formatedDataArr.push(newEntrie);
	});

	return formatedDataArr;

}

module.exports = getFormatedData;