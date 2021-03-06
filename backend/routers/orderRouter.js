import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post('/', isAuth, expressAsyncHandler(async(req, res) => {
    if(req.body.orderItems.length == 0 ){
        res.status(400).send({ message: 'Carrito vacío ' })
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.body.user._id
        });
        console.log(order);
        const createdOrder = await order.save();
        res.status(201).send({ message: 'New Order created', order: createdOrder });
    }
}))

export default orderRouter;