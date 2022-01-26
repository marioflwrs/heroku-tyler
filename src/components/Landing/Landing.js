import { Link } from "@reach/router";
import "./Landing.scss";

const Landing = () => {
    return (
        <div className="landing-container">
            <Link to="/about"><h1 className="fade-in">TYLER BILLINGER</h1></Link>
        </div>
    );
}

export default Landing;