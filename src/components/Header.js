import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">
                <Link to="/" >
                ContactFinder</Link>
            </h1>
            <ul className="navbar__list">
            <Link to="/add" >
            <li className="navbar__list_item">
                    Add
            </li>
            </Link>
                <Link to="/login">
                <li className="navbar__list_item">
                    Login
                </li>
                </Link>
                <Link to="/about">
                <li className="navbar__list_item">
                  About
                </li>
                </Link>
            </ul>
        </nav>
    )
}
