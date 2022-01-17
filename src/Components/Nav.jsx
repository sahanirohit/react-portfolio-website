import React from 'react'

function Nav() {
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className="navbar_container">
                <ul className="navbar_left">
                    <div className="navbar_left-logo">
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                </ul>
                <ul className="navbar_right">
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/">Services</a></li>
                    <li><a href="http://localhost:3000/">About</a></li>
                    <li><a href="http://localhost:3000/">Skills</a></li>
                    <li><a href="http://localhost:3000/">Portfolio</a></li>
                    <li><a href="http://localhost:3000/">Blog</a></li>
                    <li><a href="http://localhost:3000/">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
