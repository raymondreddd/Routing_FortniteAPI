import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle={
        textDecoration:'none',
        color:"white"
    };
  return (
    <nav >
        <h3>
          LOGO  
        </h3>
        <ul className="nav-links">
        <Link style={navStyle} to="/about">
            <li>ABOUT</li>
        </Link>

        <Link style={navStyle} to="/shop">
            <li>Shop</li>
        </Link>
        </ul>
    </nav>
  );
}

export default Nav;