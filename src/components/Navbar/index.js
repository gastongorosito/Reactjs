import "./index.css";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  return  <div className="Navbar">
    <nav>
    <CartWidget/>
        <a class="dropdown-item" href="#">Inicio</a>
        <a class="dropdown-item" href="#">Shop</a>
      <a class="dropdown-item" href="#">Contacto</a>
    </nav>
  </div>
}

export default Navbar;