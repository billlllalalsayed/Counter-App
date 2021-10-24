import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return (
            <nav class="navbar navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="w"> 
                  MyCart <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                   </a>
                </div>
            </nav>
        )
    }
}
 
export default Navbar;
