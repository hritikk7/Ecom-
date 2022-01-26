import './NavBar.css'
import {Link} from 'react-router-dom'
const NavBar = ({click}) =>{
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Shopping Website</h2> 
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo__badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamburger Menu */}
            <div className="hamburger__menu" onClick={click}>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>

        </nav>
    );
}


export default NavBar;

