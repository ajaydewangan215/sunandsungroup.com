import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'

const Navbar = () => {
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" id="ourUnit" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Our Unit</Link>

                                <ul className="dropdown-menu" aria-labelledby="ourUnit">
                                    <li><Link to="/sap" className="dropdown-item">Shri Sharma Ayurvedic Pharmacy</Link></li>
                                    <li><Link to="/ssj" className="dropdown-item">Sun And Sun Jeweller's</Link></li>
                                    <li><Link to="/ssipl" className="dropdown-item">Sun And Sun Inframetrics</Link></li>
                                    <li><Link to="/mips" className="dropdown-item">Mintu International Public School</Link></li>
                                    <li><Link to="/scs" className="dropdown-item">Sandeep Cold Storage</Link></li>
                                    <li><Link to="/sct" className="dropdown-item">Sun And Sun Cold & Trade</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/news" className="nav-link">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
