import React from 'react'
import Rating from './Rating';
import {Link} from 'react-router-dom'

export default function Product(props) {
    const { product } = props;
    return (
        <div className="col s12 m4 l3" key={product._id}>
            <Link to={"/product/" + product._id} className="card blue-grey darken-1 hoverable">
                <div className="card-image">
                    <img src={"/img/" + product.image} alt={product.name + " Danamo Store"} />
                    <div className="card-content white center">
                        <p className="bold">{product.name}</p>
                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        <p className="bold">${product.price}</p>
                    </div>
                </div>

            </Link>
        </div>
    )
}
