import express from 'express'
import data from './data.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server Melo')
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Serving at '+port)
})
app.get('/api/products', (req, res) => {
    res.send(data.products)
})
