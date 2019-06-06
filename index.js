const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

CTRL = require('./controllers/product_controllers')

let {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
}).catch(err => console.log(err))

app.get('/api/products', CTRL.getAll)
app.get('/api/products/:id', CTRL.getOne)
app.put('/api/products/:id', CTRL.update)
app.post('/api/products', CTRL.create)
app.delete('/api/products/:id', CTRL.delete)




app.listen(SERVER_PORT, () => console.log(SERVER_PORT,', we have 0 problems'))
