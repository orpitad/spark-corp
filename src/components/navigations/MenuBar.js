import React from 'react'
import { Link } from "react-router-dom"
import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>SPARK CORPORATION</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="AboutUs">About Us</Link></li>
                    <li><Link to="ContactUs">Contact Us</Link></li>          
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;