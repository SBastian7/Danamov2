import Axios from "axios"
import {CART_ADD_ITEM} from '../constants/cartConstants'

export const addToCart = (productId, qty, size, color) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    console.log(`/api/products/${productId}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            image: data.image,
            product: data._id,
            qty,
            size,
            color
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}