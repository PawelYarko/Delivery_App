import { NavLink } from "react-router-dom";
// import s from './AppBar.module.css';


const AppBar = () => {
    return (
        <nav>
        <NavLink to="/">Shop</NavLink >
        <NavLink to="/ShoppingCart">Shopping Cart</NavLink >
      </nav>
    )
}

export default AppBar;