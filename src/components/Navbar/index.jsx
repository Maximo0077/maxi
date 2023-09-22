import { CartWidget } from "../cartWidget";
import './nav.css';
import { NavLink, Link } from "react-router-dom";

export const NavBar = () =>{

    
    return(
        <nav className="NavBar">
            <Link to='/' >
                <h3>Ecommerce</h3>
            </Link>
            
            <div className="Categories" >
                <NavLink to={`/category/Phone`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Celulares</NavLink>
                <NavLink to={`/category/Laptop`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Laptops</NavLink>
                <NavLink to={`/category/TV`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Televisores</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}