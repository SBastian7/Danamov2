import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SigninScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // todo signin action
    }

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
                                <div class="row">
                                    <br />
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate" required onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Correo Electrónico</label>
                                    </div>
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate" required onChange={(e) => setPassword(e.target.value)} />
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
