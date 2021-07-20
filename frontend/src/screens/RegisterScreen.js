import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const redirect = props.location.search? props.location.search.split('=')[1]:'/'

    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, loading, error } = userRegister

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== repassword){
            alert("Las contraseñas no coinciden")
        }else{
            dispatch(register(name, email, password))
        }
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
                                <div className="bold">Crear Cuenta</div>
                            </div>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox>{error}</MessageBox>}
                            <form onSubmit={submitHandler}>
                                <div className="row">
                                    <br />
                                    <div className="input-field col s12">
                                        <input id="name" type="text" className="validate" required onChange={(e) => setName(e.target.value)} />
                                        <label htmlFor="name">Nombre Completo</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" required onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Correo Electrónico</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" required onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="password">Contraseña</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="repassword" type="password" className="validate" required onChange={(e) => setRePassword(e.target.value)} />
                                        <label htmlFor="repassword">Confirmar Contraseña</label>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <button type="submit" className="btn">Registrarse</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-action">
                            Ya tienes cuenta? <Link to={`/signin?redirect=${redirect}`}>Ir a iniciar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
