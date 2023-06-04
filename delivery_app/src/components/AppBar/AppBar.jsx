import { NavLink } from "react-router-dom";
import s from './AppBar.module.css';


const AppBar = () => {
    return (
        <nav className={s.nav}>
        <NavLink to="/" className={s.item}>Shop</NavLink >| 
        <NavLink to="/ShoppingCart" className={s.item}>Shopping Cart</NavLink >
      </nav>
    )
}

export default AppBar;