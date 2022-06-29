import supabase from "../configs/dbConfig.js"

const getItems = async () => {
	try {
			const {data, error} = await supabase
					.from('ex')
					.select('*')

				
			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const addItem = async item => {
	try {
			const {data, error} = await supabase
					.from('ex')
					.insert(item)

			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

const deleteItem = async id => {
	try {
			const {data, error} = await supabase
					.from('ex')
					.delete()
					.match({id});

			if (error) throw error
			return data
	} catch (e) {
			throw e
	}
}

export default {
	getItems,
	addItem,
	deleteItem
}