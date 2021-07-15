import express from 'express'
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server Melo')
})
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Serving at '+port)
})
app.get('/api/products', (req, res) => {
    res.send(data.products)
})
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id)
    if (product) {
        res.send(product)    
    }else{
        res.status(404).send({message:'Producto no encontrado'})
    }
    
})

