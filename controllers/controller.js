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
	const Item = {}
	if ((req.body.name !== '') && (req.body.value !== '')) {
			 
			Item.id = req.body.id,
			Item.name = req.body.name,
			Item.value = req.body.value,
			Item.marked = req.body.marked
	
	} else {
		res.sendStatus(500)
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

const deleteItem = async (req, res, next) => {
	try {
			console.log("Id удаляемого товара: ",req.params["id"])
			const data = await Service.deleteItem(req.params["id"]);
			res.send(data);
			next();
	} catch(e) {
			console.error(e);
			res.sendStatus(500);
	}
}

export default {
	getItems,
	addItem,
	deleteItem,
}