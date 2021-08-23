import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function PlacerOrderScreen(props) {

	const cart = useSelector((state) => state.cart)
	const user = useSelector((state) => state.userSignin)

	const dispatch = useDispatch();

	if (!cart.shippingAddress) {
		props.history.push('/shipping')
	}

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id))
	}

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

	cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0);	
	const priceBefore = cart.itemsPrice
	const priceIVA = Number((cart.itemsPrice/1.19).toFixed(0))
	
	const placeOrderHandler = () => {
		console.log("placing order");
		// TODO DISPARTCH
	}
	return (
		<div className='container'>
			<CheckoutSteps step1 step2 step3></CheckoutSteps>
			<div className="row">
				<div className="col s12 m8">
					<div className="card">
						<div className="card-content">
							<div className="card-title center">
								<span className="bold">Información de envío</span>
							</div>
							<br />
							<div className="row">
								<p><div className="bold col s2">Nombre:</div><div className="col">{user.userInfo.name}</div></p>
								<br />
								<p><div className="bold col s2">Dirección:</div><div className="col">{cart.shippingAddress.address}</div></p>
								<br />
								<p className="col offset-s2">{cart.shippingAddress.city}, {cart.shippingAddress.dpto}</p>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-content">
							<div className="card-title center">
								<div className="bold">Lista de Productos</div>
							</div>
							<br />
								<ul className="collection">
									{
										cart.cartItems.map((item, index) => (
											<li className="collection-item">
												<div className="valign-wrapper">
													<div className="col s1">
														{index + 1}
													</div>
													<img src={"/img/" + item.image} alt={item.name + " Danamo Store"} className="responsive-img col s2" />
													<div className="col s6">
														<Link to={`/product/${item.product}`}>{" " + item.name}</Link>
													</div>
													<div className="col s5">
														<div className="right">{item.qty} x ${dotprice(String(item.price))} = ${dotprice(String(item.qty * item.price))}</div>
													</div>
												</div>
											</li>
										))
									}
								</ul>
						</div>
					</div>
				</div>
				<div className="col s12 m4">
					<div className="card">
						<div className="card-content">
							<div className="card-title center">
								<div className="bold">
									Resumen
								</div>
							</div>
							<br />
							<div className="row">
								<p>
									<div className="left">
										Artículos
									</div>
									<div className="right">
										$ {dotprice(String(priceIVA))}
									</div>
								</p>
								<br />
								<p>
									<div className="left">
										Envío
									</div>
									<div className="right">
										$ {cart.itemsPrice < 100000 ? 10000:0}
									</div>
								</p>
								<br />
								<p>
									<div className="left">
										IVA
									</div>
									<div className="right">
										$ {dotprice(String(priceBefore-priceIVA))}
									</div>
								</p>
								<br />
								<p className="bold">
									<hr />
									<div className="left">
										Total
									</div>
									<div className="right">
										$ {dotprice(String(priceBefore))}
									</div>
								</p>
							</div>
							<div className="row center"><button className="btn" onClick={placeOrderHandler}>Ir a pagar</button></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
