import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions';

export default function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const redirect = props.location.search? props.location.search.split('=')[1]:'/'

    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history, redirect, userInfo])

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card center">
                        <div className="card-content">
                            <div className="card-title">
                                <div className="bold">Iniciar Sesión</div>
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <br />
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" required onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Correo Electrónico</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" required onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="password">Contraseña</label>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <button type="submit" className="btn">Ingresar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-action">
                            No tienes cuenta? <Link to="/register">Ir a registrarse</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
