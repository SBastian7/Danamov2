import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
dotenv.config()

mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
app.get('/', (req, res) => {
    res.send('Server Melo')
})
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.use((err,req,res,next) => {
    res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 4477
app.listen(port, () => {
    console.log('Serving at '+port)
})