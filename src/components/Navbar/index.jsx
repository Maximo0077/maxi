import { CartWidget } from "../cartWidget";
import './nav.css';
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Biblioteca Digital</h3>
            </Link>

            <div className="Categories">
                <NavLink to={`/category/Economia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Libros</NavLink>
                <NavLink to={`/category/Psicologia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Guías</NavLink>
                <NavLink to='/checkout' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Checkout</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}
