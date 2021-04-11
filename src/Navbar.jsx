import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(props) {
    return (
        <>
            <div className="navbar_style">
                <NavLink exact activeClassName="active_class" id="selectedid" className='navmenu' to ="/"> Home </NavLink>
                <NavLink exact activeClassName="active_class" className='navmenu' to ="/about"> About US </NavLink>
                <NavLink exact activeClassName="active_class" className='navmenu' to ="/service"> Services </NavLink>
                <NavLink exact activeClassName="active_class" className='navmenu' to = "/contact"> Contact US </NavLink>

            </div>
            
        </>
    );
}

export default Navbar;