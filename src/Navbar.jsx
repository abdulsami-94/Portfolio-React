import { Link, useLocation } from "react-router-dom";

function Navbar(){
    const location = useLocation();
    console.log("Current Location:",location);

    const showBack = location.pathname.startsWith("/projects/");
    console.log("Show Back?", showBack);

    return(
        <nav className="NavBar">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/contact"> Contact</Link>
            {showBack && <Link to="./projects"> Back </Link>}
        </nav>
    );
}

export default Navbar;