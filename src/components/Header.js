import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={require("../images/bulma.png")} alt="Logo" />
        </a>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <Link to='/' className="navbar-item">
            Home
          </Link>
          <a className="navbar-item">
            <img src={require("../images/react.png")} alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  </nav>
)