import React from 'react';
import{NavLink} from 'react-router-dom';

function Errorpage(props) {
    return (
        <>

        <h1> 404 Page not found </h1>

        <NavLink to="/"></NavLink>

        </>
    );
}

export default Errorpage;