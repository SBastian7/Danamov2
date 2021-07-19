import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

const app = express();
//process.env.MONGO_DB_URL
mongoose.connect(`mongodb+srv://admin:admin@cluster0.ceftn.mongodb.net/danamo_db?retryWrites=true&w=majority`,{
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
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Serving at '+port)
})