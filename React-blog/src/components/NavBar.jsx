import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Hom</Link></li>
                <li><Link to="/bolly">Bollywood</Link></li>
                <li><Link to="/fitnes">Fitness</Link></li>
                <li><Link to="/holly">Hollywood</Link></li>
                <li><Link to="/foodie">Food</Link></li>
                <li><Link to="/tech">Technology</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar