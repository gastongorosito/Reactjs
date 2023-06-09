import React from "react";
import "./index.css";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";



const Navbar = () => {
  return  (
    <nav className= "navbar navbar-expand-lg navbar-dark bf-primary">
      <div className="container-fluid">
        <h3>FDX Shop</h3>
        <a className="btn btn-outline-secondary border-1 rounded-5">Inicio</a>
        <a className="btn btn-outline-secondary border-1 rounded-5">Shop</a>
        <a className="btn btn-outline-secondary border-1 rounded-5">Contacto</a>
      <CartWidget/>
      </div>
    </nav>
  )
}

export default Navbar;