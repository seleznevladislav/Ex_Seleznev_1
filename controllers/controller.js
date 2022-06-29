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

const addItem = async (req, res, next) => {
	const Item = {
		id: req.body.id,
		name: req.body.name,
		value: req.body.value,
		marked: req.body.marked,
	}
	try {
			const dataItem = await Service.addItem(Item)
			res.send(dataItem)
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default {
	getItems,
	addItem
}