import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="container">
        <div className="content">
            <p className="logo">JonaOchoa</p>
            <div className="nav-links">
                <ul className="link-menu">
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/radio">Radio</Link>                     */}
                    <li className="link" href="/">Home</li>
                    <li className="link" href="/about">About</li>
                    <li className="link" href="/radio">Radio</li> 
                </ul>
            </div>
            <button className="btn">Contact Us</button>
        </div>
    </nav>
  )
}

export default Navbar