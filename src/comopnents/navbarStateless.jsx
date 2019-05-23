import React, { Component } from 'react';


const NavbarStateless=(props)=> {
        return ( 
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/">Navbar 
             <span className="badge badge-pill badge-secondary m-2"> {props.totalCounters}</span>
            </a>
            </nav>
         );
}
 
export default NavbarStateless;