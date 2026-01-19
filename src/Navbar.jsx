import { Link, useLocation } from "react-router-dom";

function Navbar(){
    const location = useLocation();
    console.log("Current Location:",location);

    const showBack = location.pathname.startsWith("/projects/");
    console.log("Show Back?", showBack);

    return(
        <nav className="NavBar">
            <Link to="/" className={ location.pathname === "/" ? "active" : "" }> Home </Link>
            <Link to="/projects" className={ location.pathname === "/projects" ? "active" : "" }> Projects </Link>
            <Link to="/contact" className={ location.pathname === "/contact" ? "active" : "" }> Contact</Link>
            {showBack && <Link to="./projects"> Back </Link>}
        </nav>
    );
}

export default Navbar;