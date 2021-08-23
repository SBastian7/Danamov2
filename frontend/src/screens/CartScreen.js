import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom'
import M from "materialize-css";


export default function CartScreen(props) {
	const productId = props.match.params.id;
	const qty = props.location.search ? Number(props.location.search.split('&')[0].split('=')[1]) : 1;
	const color = props.location.search ? props.location.search.split('&')[1].split('=')[1] : 'non';
	const size = props.location.search ? Number(props.location.search.split('&')[2].split('=')[1]) : 0;
	const cart = useSelector(state => state.cart)
	const { cartItems } = cart
	const dispatch = useDispatch();
	useEffect(() => {
		if (productId) {
			console.log(color,size)
			dispatch(addToCart(productId, Number(qty), color, Number(size)))
		}
		instance()
	}, [color, dispatch, productId, qty, size])

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

	const instance = () => {
		var elems = document.querySelectorAll('.collapsible');
		var options = {}
    // eslint-disable-next-line no-unused-vars
    var instances = M.Collapsible.init(elems, options);
		
	}

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id))
	}

	const checkoutHandler = () => {
		props.history.push('/signin?redirect=shipping')
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col s12 m8">
					<div className="card">
						<div className="card-content">

							<div className="card-title">
								<div className="bold center">
									Carrito de compras
								</div>
							</div>
							<div className="row">
								<div className="col s12">
									{
										cartItems.length === 0 ? <MessageBox>
											Tu carrito de compras está vacío... Ir a <Link to="/">comprar</Link>
										</MessageBox> :
											(
												<ul className="collapsible popout">
													{
														cartItems.map((item) => (
															<li className="" key={item.product}>
																<div className="collapsible-header" onClick={instance()}>
																	<div className="valign-wrapper">
																		<div className="col s4">
																			<img src={"/img/" + item.image} className="responsive-img" alt={item.name} />
																		</div>
																		<div className="col s7 center">
																			<Link className="" to={`/product/${item.product}`}>{item.name.toUpperCase()}</Link>
																			<br />
																			<div className="">
																			<i className="fas fa-sort-down"></i>
																			</div>
																		</div>
																		<div className="col s1 ml-10">
																			<i className="cursor z-9 far fa-times-circle red-text text-darken-4 ml-10" onClick={(e) => {e.preventDefault(); removeFromCartHandler(item.product,e)}}></i>
																		</div>
																	</div>
																</div>
																<div className="collapsible-body">
																	<div className="row">
																		<div className="col s3 center">
																			<label>Cantidad</label>
																			<select
																				className="browser-default"
																				value={item.qty}
																				onChange={(e) =>
																					dispatch(
																						addToCart(item.product,Number(e.target.value),item.color,item.size)
																					)} >
																				{
																					[...Array(item.stock).keys()].map(x => (
																						<option key={x} value={x + 1}>{x + 1}</option>
																					))
																				}
																			</select>
																		</div>
																		<div className="col s3 center">
																				<label>Color</label>
																				<br />
																				{item.color}
																		</div>
																		<div className="col s3 center">
																				<label>Talla</label>
																				<br />
																				{item.size}
																		</div>
																		<div className="col s3 center">
																		<label>Precio</label>
																		<br />
																			{"$" + dotprice(item.price.toString())}
																		</div>
																	</div>
																</div>
															</li>
														))
													}
												</ul>
											)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col s12 m4">
						<div className="card">
							<div className="card-content">
								<div className="card-title">
									<div className="bold center">
										Resumen
									</div>
								</div>
								<div className="row">
									<br />
									<div className="col">
										Productos: 
									</div>
									<div className="">
										{
											cartItems.reduce((a,c) => Number(a) + Number(c.qty), 0) +" Items"
										}
									</div>
								</div>
								<div className="row">
									<div className="col">
										Subtotal: 
									</div>
									<div className="">
										{
											"$"+dotprice(cartItems.reduce((a,c) => Number(a) + Number(c.price*c.qty), 0).toString())
										}
									</div>
								</div>
								<div className="row">
									<div className="btn" onClick={checkoutHandler} disabled={cartItems.length === 0}>
										Continuar Compra
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	)
}
