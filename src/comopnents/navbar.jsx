import React, { Component } from 'react';


class Navbar extends Component {
    state = {  }
    render() {
        const {totalCounters}=this.props;
        return ( 
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/">Navbar 
             <span className="badge badge-pill badge-secondary m-2"> {totalCounters}</span>
            </a>
            </nav>
         );
    }
}
 
export default Navbar;