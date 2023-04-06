import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="bg-image">
                <div className="bg-container">
                    {/* <h1>SPARK CORPORATION</h1> */}
                    <h2>Let us take charge of your electrical and instrumentation needs!</h2>
                    {/* <Link to="/">Book Now!</Link> */}
                </div>
            </header>
        </>
    )
}

export default Header;