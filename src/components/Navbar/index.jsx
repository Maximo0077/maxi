import { CartWidget } from "../cartWidget";
import './nav.css';
import { NavLink, Link } from "react-router-dom";

export const NavBar = () =>{

    
    return(
        <nav className="NavBar">
            <Link to='/' >
                <h3>Bibloteca Digital</h3>
            </Link>
            
            <div className="Categories" >
                <NavLink to={`/category/Economia`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >lIBROS</NavLink>
                <NavLink to={`/category/Psicologia`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >GUIAS</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}