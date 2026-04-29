import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from './Context/ThemeContext';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);




    return (
        <div className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bolly">Bollywood</Link></li>
                <li><Link to="/fitnes">Fitness</Link></li>
                <li><Link to="/holly">Hollywood</Link></li>
                <li><Link to="/foodie">Food</Link></li>
                <li><Link to="/tech">Technology</Link></li>
            </ul>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
            </button>
        </div>
    )
}

export default NavBar