import React,{useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import AuthContext from '../context/auth/auth.context';
import { useHistory } from "react-router-dom";


export default function Header() {
    const history = useHistory();
    const authContext = useContext(AuthContext);

    useEffect(() => {

    }, [authContext.isLoggedIn]);
    
    const onLogout = ()=>{
        authContext.logout();
        // history.push('/login')
    }

    return (
        authContext.isLoggedIn ? ( <nav className="navbar">
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
                {/* <Link to="#"> */}
                <li className="navbar__list_item" onClick={onLogout}>
                    Logout
                </li>
                {/* </Link> */}
            </ul>
        </nav>) : ( <nav className="navbar">
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
                    Login               </li>
                </Link>
                <Link to="/about">
                <li className="navbar__list_item">
                  About
                </li>
                </Link>
            </ul>
        </nav>)
    )
}
