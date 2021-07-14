import React from 'react'

export default function Rating(props) {
    const { rating } = props;
    return (
        <div className="yellow-text text-darken-3">
            <i className={rating >= 1 ? "fas fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            <i className={rating >= 2 ? "fas fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            <i className={rating >= 3 ? "fas fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            <i className={rating >= 4 ? "fas fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            <i className={rating >= 5 ? "fas fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
        </div>
    )
}
