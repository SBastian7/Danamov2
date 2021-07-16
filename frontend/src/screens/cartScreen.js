import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('&')[0].split('=')[1]): 1;
    const color = props.location.search? props.location.search.split('&')[1].split('=')[1]: 'non';
    const size = props.location.search? Number(props.location.search.split('&')[2].split('=')[1]): 0;

    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty,color,size))
        }
    },[color, dispatch, productId, qty, size])

    return (
        <div>
            <h1>Cart Screen</h1>
            ADD to cart product id: {productId}-{qty}-{color}-{size}
        </div>
    )
}
