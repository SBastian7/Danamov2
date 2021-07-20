import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { signout } from './actions/userActions.js';
import CartScreen from './screens/CartScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import SigninScreen from './screens/SigninScreen.js';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin

  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }
  console.log(userInfo)

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ul id="dropdown1" className="dropdown-content">
            {/* <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li> */}
          </ul>
          <nav className="nav-extended white">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">
                <img src="/img/logo.png" className="logo hide-on-small-only show-on-medium-and-up" alt="Danamo Store" />
              </Link>

              <Link to="#!" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up red-text text-darken-4"><i className="material-icons">menu</i></Link>
              {
                userInfo? (
                  <ul id='dropdown2' className='dropdown-content'>
                <li><Link to="/signin"><i className="material-icons">cloud</i>Tu cuenta</Link></li>
                <li><Link to="#signout" onClick={signoutHandler}>Cerrar sesión</Link></li>
              </ul>
                ):(
                  <ul id='dropdown2' className='dropdown-content'>
                <li><Link to="/signin"><i className="material-icons">cloud</i>Iniciar sesión</Link></li>
                <li><Link to="/register"><i className="material-icons">cloud</i>Registrarse</Link></li>
              </ul>
                )
              }
              <ul id="nav-mobile" className="right">
                <li>
                  
                  {
                    userInfo ? (
                      <Link to="#!" className="dropdown-trigger" data-target='dropdown2'>
                        <i className="far fa-user fa-lg red-text text-darken-4"></i>
                        <span className=" red-text text-darken-4">
                          {
                            ' ' + userInfo.name}
                        </span>
                      </Link>
                    ) : (
                      <Link to="#!" className="dropdown-trigger" data-target='dropdown2'>
                        <i className="far fa-user fa-lg red-text text-darken-4"></i>
                        <span className=" red-text text-darken-4">
                          {" Ingresar"}
                        </span>
                      </Link>
                    )

                  }
                </li>
                <li><Link to="/cart" className="cart-button valign-wrapper"><i className="fas fa-shopping-cart fa-lg"></i>{cartItems.length >= 0 && (<span className="cart-badge">{" " + cartItems.length}</span>)}</Link></li>
              </ul>
            </div>

            <div className="nav-content hide-on-small-only ">
              <Link className="red-text btn-flat white" to="/">Inicio</Link>
              <Link className="red-text btn-flat white dropdown-trigger" to="#!" data-target="dropdown1">Tienda<i className="material-icons right">arrow_drop_down</i></Link>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><Link to="sass.html">Sass</Link></li>
            <li><Link to="badges.html">Components</Link></li>
            <li><Link to="collapsible.html">Javascript</Link></li>
            <li><Link to="mobile.html">Mobile</Link></li>
          </ul>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen} ></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="page-footer">

          <div className="row">
            <div className="col m3 s12">
              <h5 className="white-text">Nuestra Tienda</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col m3 s12">
              <h5 className="white-text">Ayuda</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col m3 s12">
              <h5 className="white-text">Sobre Nosotros</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col m3 s12">
              <h5 className="white-text">Contacto</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>

          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2021 Danamo Store
              <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
