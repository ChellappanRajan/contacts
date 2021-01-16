import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/auth.context";

export default function Header() {
  const authContext = useContext(AuthContext);

  useEffect(() => {}, [authContext.isLoggedIn]);

  const onLogout = () => {
    authContext.logout();
  };

  return authContext.isLoggedIn ? (
    <nav className="navbar">
      <h1 className="navbar__title">
        <Link to="/">ContactFinder</Link>
      </h1>
      <ul className="navbar__list">
        <Link to="/add">
          <li className="navbar__list_item">Add</li>
        </Link>
        <Link to="/about">
          <li className="navbar__list_item">About</li>
        </Link>
        <li className="navbar__list_item" onClick={onLogout}>
          Logout
        </li>
      </ul>
    </nav>
  ) : (
    <nav className="navbar">
      <h1 className="navbar__title">
        <Link to="/">ContactFinder</Link>
      </h1>
      <ul className="navbar__list">
        <Link to="/login">
          <li className="navbar__list_item">Login</li>
        </Link>
      </ul>
    </nav>
  );
}
