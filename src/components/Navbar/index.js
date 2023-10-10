import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="container">
        <div className="content">
            <p className="logo">RadioJonaDev</p>
            <div className="nav-links">
                <ul className="link-menu">
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/radio">Radio</Link>                     */}
                    <li className="link" href="/">Inicio</li>
                    <li className="link" href="/about">Acerca De</li>
                    <li className="link" href="/radio">Radio</li> 
                </ul>
            </div>
            <button className="btn">Contáctanos</button>
        </div>
    </nav>
  )
}

export default Navbar