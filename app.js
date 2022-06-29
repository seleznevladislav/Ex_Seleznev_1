import express from 'express'
import path from 'path'
import 'dotenv/config'
import Controller from "./controllers/controller.js"

const PORT = process.env.PORT || 5500

const app = express()


let INFORMATION = [ 
	{name: 'Vladislav',	value: '+7 (950) 469-96-01', marked:false}
	 ];

const __dirname = path.resolve(path.dirname(''));
app.use(express.static(path.resolve(__dirname, 'frontend')));
app.use(express.json());

app.get('/api/contacts', Controller.getItems)
app.post('/api/contacts', Controller.addItem)
app.delete('/api/contacts/:id', Controller.deleteItem)

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`Server started at PORT ${PORT}`)
})