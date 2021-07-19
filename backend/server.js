import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(`mongodb+srv://admin:admin@cluster0.ceftn.mongodb.net/danamo_db?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
app.get('/', (req, res) => {
    res.send('Server Melo')
})
app.get('/api/products', (req, res) => {
    res.send(data.products)
})
app.use('/api/users', userRouter)
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id)
    if (product) {
        res.send(product)    
    }else{
        res.status(404).send({message:'Producto no encontrado'})
    }
    
})
app.use((err,req,res,next) => {
    res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Serving at '+port)
})