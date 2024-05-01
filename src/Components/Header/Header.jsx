import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                
                <Link to="/">Home</Link>
                <NavLink to="/posts"></NavLink>
                <NavLink to="users"></NavLink>
                
                <Link to="/about">About</Link>
                
                <Link to="/contact">Contact us</Link>
            </nav>
        </div>
    );
};

export default Header;