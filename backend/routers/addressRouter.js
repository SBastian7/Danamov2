import express from 'express'
import expressAsyncHandler from 'express-async-handler';
import Address from '../models/addressModel.js';
import { isAuth } from '../utils.js';

const addressRouter = express.Router();

addressRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        if (req.body.address) {
            const address = new Address({
                user: req.body.user,
                address: req.body.address,
                obs: req.body.obs,
                phone: req.body.phone,
                department: req.body.department,
                city: req.body.city
            });
            const createdAddress = await address.save();
            res.status(201).send({ message: 'Dirección OK', address: createdAddress })
        }else{
            res.status(400).send({ message: 'Dirección vacía ' })
        }
    })
)

export default addressRouter;