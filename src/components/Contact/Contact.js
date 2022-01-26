import { Link } from "@reach/router";

import './Contact.scss';

import logo from '../../Assets/Icons/ig-icon.png';

const Contact = () => {
    return(
        <div className="contact-container fade-in">
            <Link to="/about"><h1>TYLER@TYLERBILLINGER.COM</h1></Link>
            <a href={'//www.instagram.com/tylerbilly'} target="_blank" rel="noreferrer noopener"><img src={logo} alt="instagram.com/tylerbilly"/></a>
        </div>
    );
} 

export default Contact;