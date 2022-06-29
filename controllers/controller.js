import Service from '../services/service.js';

const getItems = async (req, res, next) => {
	try {
			const data = await Service.getItems()
			res.send(data)
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default {
	getItems
}