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

export default {
	getItems
}