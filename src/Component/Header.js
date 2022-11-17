import React from "react"
import Reactlogo from '../Image/logo192.png'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={Reactlogo} alt="react01" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
