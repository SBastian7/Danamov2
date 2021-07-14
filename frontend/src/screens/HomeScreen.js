import React from 'react'
import Product from '../components/Product'
import data from '../data.js'

export default function HomeScreen() {
    return (
        <div className="container">
            <br />
            <div className="row">
              {
                data.products.map(product => (
                  <Product key={product._id} product={product}></Product>
                ))
              }
            </div>
          </div>
    )
}
