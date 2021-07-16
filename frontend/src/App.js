import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom'
import cartScreen from './screens/cartScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
          <nav className="nav-extended white">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">
                <img src="/img/logo.png" className="logo hide-on-small-only show-on-medium-and-up" alt="Danamo Store" />
              </a>

              <a href="#!" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up red-text text-darken-4"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right">
                <li><a href="#!"><i className="far fa-user fa-lg red-text text-darken-4"></i><span className="red-text text-darken-4">Ingresar</span></a></li>
                <li><a href="#!"><i className="fas fa-shopping-cart fa-lg red-text text-darken-4"></i><span className="red-text text-darken-4">0</span></a></li>
              </ul>
            </div>

            <div className="nav-content hide-on-small-only ">
              <a className="red-text btn-flat white" href="/">Inicio</a>
              <a className="red-text btn-flat white dropdown-trigger" href="#!" data-target="dropdown1">Tienda<i className="material-icons right">arrow_drop_down</i></a>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
        </header>
        
        <main>
          <Route path="/cart/:id?" component={cartScreen} ></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
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
