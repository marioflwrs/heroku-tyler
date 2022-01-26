import { Link } from "@reach/router";

import './Navigation.scss';

const Navigation = () => {
    return (
        <div>
            
            <div className="nav-container">
                <Link to="/"><li className="nav-title">TYLER BILLINGER</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/work"><li>WORK</li></Link>
                <Link to="/press"><li>PRESS</li></Link>
                <Link to="/contact"><li>CONTACT</li></Link>
            </div>            
        </div>
    );
}

export default Navigation;