import React from 'react'
import { Link } from "react-router-dom"
import linkedIn from '../../images/linkedIn.png';

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="AboutUs">About Us</Link></li>
                    <li><Link to="ContactUs">Contact Us</Link></li>
                </ul>

                <ul className="social">
                    {/* <li>
                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
                    </li> */}
                    <li>
                        <a href="https://www.linkedin.com/in/shakti-sinha-9838a714"><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul>
                <a href="https://www.linkedin.com/in/shakti-sinha-9838a714">                    
                    <img src={linkedIn} className="linkedIn" alt="LinkedIn" />
                    {/* <span>Shakti Sinha</span> */}
                </a>
                <p>&copy;Spark Corporation. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;