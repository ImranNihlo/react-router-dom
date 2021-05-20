import React from 'react';
import Cover from "./Cover";
import Menu from "./Menu";

function Header(props) {
    return (
        <div className="row">
            <Cover/>
            <Menu/>
        </div>
    );
}

export default Header;