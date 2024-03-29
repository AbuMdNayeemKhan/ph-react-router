import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <div>
            <nav>
                <Link to="/">_Home_</Link>
                <Link to="/about">_About_</Link>
                <Link to="/contact">_Contact_</Link>
                <Link to="/users">_Users_</Link>
            </nav>
        </div>
    );
};
export default Header;