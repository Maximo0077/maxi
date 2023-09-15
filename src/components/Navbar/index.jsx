import { CartWidget } from "../cartWidget";
import './nav.css';
import { NavLink, Link } from "react-router-dom";

export const NavBar = () =>{

    
    return(
        <nav className="navBar">
            <Link to='/' >
                <h3>Ecommerce</h3>
            </Link>
            
            <div>
                <NavLink to={`/category/phone`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Celulares</NavLink>
                <NavLink to={`/category/laptop`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Laptops</NavLink>
                <NavLink to={`/category/televisor`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Televisores</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}