import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
import Rating from '../components/Rating.js'

export default function HomeScreen(props) {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const [qty, setQty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
	const [color, setColor] = useState('')
	const [size, setSize] = useState(0)

	useEffect(() => {
		dispatch(detailsProduct(productId))

	}, [dispatch, productId])

	const dotprice = (price_txt) => {
		var txt = ""
		var pos = 0
		for (var n = price_txt.length; n >= 0; n--) {
			if ((n) % 3 === 0 && n !== 0 && n !== price_txt.length) {
				if (pos < price_txt.length) {
					txt += '.' + price_txt[pos]
					pos++
				}
			} else {
				if (pos < price_txt.length) {
					txt += price_txt[pos]
					pos++
				}
			}
		}
		return txt
	}

	const addToCartHandler = () => {
		props.history.push(`/cart/${productId}?qty=${qty}&color=${color}&size=${size}`)
	}
	return (
		<div className="container">
			<br />
			{
				loading ? (<LoadingBox></LoadingBox>)
					: error ? (<MessageBox variant='danger'>{error}</MessageBox>)
						: (
							<div className="container">
								<div className="row">
									<div className="col s12">
										<div className="card">
											<div className="card-content">
												<div className="row">
													<div className="col s12 m6">
														<div className="card-image">
															<img src={"/img/" + product.image} alt={product.name + " on Danamo Store"} className="materialboxed hoverable" />
														</div>
														<br />
														<div className="row">
															<img src={"/img/" + product.image} alt={product.name + " on Danamo Store"} className="col s3 img-responsive thumbnails" />
															<img src={"/img/" + product.image} alt={product.name + " on Danamo Store"} className="col s3 img-responsive thumbnails" />
															<img src={"/img/" + product.image} alt={product.name + " on Danamo Store"} className="col s3 img-responsive thumbnails" />
															<img src={"/img/" + product.image} alt={product.name + " on Danamo Store"} className="col s3 img-responsive thumbnails" />
															<img src={"/img/" + product.image} alt={product.name + " on Danamo Store"} className="col s3 img-responsive thumbnails" />
														</div>
													</div>
													<div className="col s12 m6">
														<div className="card-title center">
															<span className="bold">{product.name}</span>
														</div>
														<div className="row">
															<div className="col s12">
																<p>
																	{product.description}
																</p>
															</div>
														</div>
														<div className="row">
															<div className="col s5 offset-s1 center">
																{product.rating}
																<Rating rating={product.rating}></Rating>
																<small className="grey-text">{product.numReviews + " calificaciones"}</small>
															</div>
															<div className="col s5 center bold">
																<h5 className="bold">
																	${dotprice(product.price.toString())}
																</h5>
															</div>
														</div>
														<div className="row valign-wrapper">
															<div className="col bold">Colores</div>
															{
																product.colores.map((c, index) => (
																	<div className={"color_box hoverable " + c} key={c} onClick={() => {setColor(c)}}>
																		{/* <i className="fas fa-check check"></i> */}
																	</div>
																))
															}
														</div>
														<div className="row valign-wrapper">
															<div className="col bold">
																Tallas
															</div>
															{
																product.tallas.map((s, index) => (
																	<div className={"size_box hoverable center"} key={`size${s}`} id={`size${s}`} onClick={() => setSize(s)}>
																		{s}
																	</div>
																))
															}
														</div>
														<div className="row">
															<div className="col s12">
																{product.stock > 0 ?
																	<div className="grey-text text-darken-3">
																		<div className="row valign-wrapper">
																			<div className="col bold">
																				Cantidad
																			</div>
																			<div className="col">
																				<select className="browser-default" value={qty} onChange={(e) => setQty(e.target.value)}>
																					{
																						[...Array(product.stock).keys()].map(x => (
																							<option key={x} value={x + 1}>{x + 1}</option>
																						))
																					}
																				</select>
																			</div>
																		</div>

																		<div className="col s12">
																			<i className="fas fa-shipping-fast green-text text-darken-3"></i> Disponible
																		</div>
																	</div>
																	: <div className="grey-text text-darken-3">
																		<i className="far fa-times-circle"></i> Sin stock
																	</div>
																}
															</div>
														</div>
														<div className="row">
															<div className="col s12">
																{
																	product.stock > 0
																		? <div>

																		</div> :
																		<div>

																		</div>
																}
																{
																	product.stock > 0
																		? <div className="col s12 btn_product_screen valign-wrapper hoverable" onClick={addToCartHandler}><div className="col s12 center">
																			<i className="fas fa-cart-arrow-down fa-lg"></i> AÑADIR AL CARRITO</div></div>
																		: <div className="">
																			<div className="col s12 btn_noproduct_screen valign-wrapper"><div className="col s12 center">
																				<i className="fas fa-times fa-lg"></i> VENDIDO</div></div>
																			<div className="col s12 btn_question_screen valign-wrapper hoverable bold"><div className="col s12 center">
																				<i className="fab fa-whatsapp fa-lg"></i> CUANDO ESTARÁ DISPONIBLE?</div></div>
																		</div>
																}
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>)
			}

		</div>


	)
}
