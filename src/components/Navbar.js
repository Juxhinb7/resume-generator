import {
    BrowserRouter as Router,
    Link
} 
from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="fixed-top">
            <h1 style={{textAlign: "center", marginBottom: "0px", background: "white"}}>Resume Generator</h1>
            <nav className="nav justify-content-center" style={{background: "white"}}>
            
                <Link to="/">Generate a resume</Link>
                <Link to="/templates">Templates</Link>
                
            </nav>
            </div>
        </div>
    )
}

export default Navbar;