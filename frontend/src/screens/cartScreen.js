import React from 'react'

export default function cartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1]): 1;
    return (
        <div>
            <h1>Cart Screen</h1>
            ADD to cart product id: {productId}-{qty}
        </div>
    )
}
