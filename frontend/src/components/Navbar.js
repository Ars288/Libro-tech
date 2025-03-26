import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h2>📚 Libro Tech</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Book</Link></li>
                <li><Link to="/search">Search Book</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
