import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark  bg-secondary">
                <NavLink to="/" className="navbar-brand">JS_GROUP_5_KIM_VITALIY</NavLink>
                <Navigation/>
            </nav>
        </header>
    );
};

export default Header;
