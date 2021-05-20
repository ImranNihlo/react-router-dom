import React from 'react';
import { NavLink } from "react-router-dom";

function Menu(props) {
    return (
        <div className="menu">
            <ul>
                <NavLink exact to="/" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink to="/features" activeClassName="selected">
                    Features
                </NavLink>
                <NavLink to="/contacts" activeClassName="selected">
                    Contacts
                </NavLink>
            </ul>
        </div>
    );
}

export default Menu;