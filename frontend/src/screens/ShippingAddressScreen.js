import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAddress } from '../actions/addressActions'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen(props) {

    const userSignin = useSelector( (state) => state.userSignin)
    const { userInfo } = userSignin

    const cart = useSelector( (state) => state.cart)
    const {shippingAddress} = cart

    if(!userInfo){
        props.history.push('/signin')
    }
    const [address, setAddress] = useState(shippingAddress.address)
    const [obs, setObs] = useState(shippingAddress.obs)
    const [phone, setPhone] = useState(shippingAddress.phone)
    const [dpto, setDpto] = useState(shippingAddress.department)
    const [city, setCity] = useState(shippingAddress.city)
    const [saveAddress, setSaveAddress] = useState(false)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({fullname:userInfo.name,address,obs,phone,department:dpto,city,user:userInfo._id}))
        console.log(userInfo);
        if(saveAddress){
            console.log("guardando");
            dispatch(createAddress(cart.shippingAddress))
        }
        props.history.push('/placeorder')
    }

    return (
        <div className="container">
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="row">
                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title center">
                                <div className="bold">Dirección de envío</div>
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <br />
                                    <div className="input-field col s12 center">
                                        <input id="address" type="text" className="validate" required value={address} onChange={(e) => setAddress(e.target.value)} />
                                        <label htmlFor="address" className={address&&'active'}>Dirección</label>
                                    </div>
                                    <div className="input-field col s12 center">
                                        <input id="obs" type="text" className="validate" required value={obs} onChange={(e) => setObs(e.target.value)} />
                                        <label htmlFor="obs" className={address&&'active'}>Observaciones</label>
                                    </div>
                                    <div className="input-field col s12 center">
                                        <input id="phone" type="tel" className="validate" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        <label htmlFor="phone" className={address&&'active'}>Celular</label>
                                    </div>
                                    <div className="input-field col s12 center">
                                        <input id="depto" type="text" className="validate" required value={dpto} onChange={(e) => setDpto(e.target.value)} />
                                        <label htmlFor="depto" className={address&&'active'}>Departamento</label>
                                    </div>
                                    <div className="input-field col s12 center">
                                        <input id="city" type="text" className="validate" required value={city} onChange={(e) => setCity(e.target.value)} />
                                        <label htmlFor="city" className={address&&'active'}>Ciudad</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <p>
                                        <label>
                                            <input type="checkbox" id="saveAddress" checked={saveAddress} onChange={(e) => setSaveAddress(!saveAddress)} />
                                            <span>Guardar dirección</span>
                                        </label>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12 center">
                                            <button type="submit" className="btn">Añadir dirección</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
