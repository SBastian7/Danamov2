import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Address from '../models/addressModel.js';
import { isAuth } from '../utils.js';

const addressRouter = express.Router();

addressRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        if (req.body.shippingAddress) {
            const address = new Address({
                user: req.user._id,
                address: req.body.address,
                obs: req.body.obs,
                phone: req.body.phone,
                department: req.body.department,
                city: req.body.phone
            });
            const createdAddress = await address.save();
            res.status(201).send({ message: 'Dirección OK', address: createdAddress })
        }
    })
)

export default addressRouter;