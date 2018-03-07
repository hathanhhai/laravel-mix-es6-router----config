import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
        <div className="float-left">
            <a href="#" data-activates="slide-out" className="button-collapse"><i className="fa fa-bars"></i></a>
        </div>
        <div className="breadcrumb-dn mr-auto">
            <p>Material Design for Bootstrap</p>
        </div>
        <ul className="nav navbar-nav nav-flex-icons ml-auto">
            <li className="nav-item">
                <a className="nav-link"><i className="fa fa-envelope"></i> <span className="clearfix d-none d-sm-inline-block">Contact</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><i className="fa fa-comments-o"></i> <span className="clearfix d-none d-sm-inline-block">Support</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><i className="fa fa-user"></i> <span className="clearfix d-none d-sm-inline-block">Account</span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
    </nav>
    );
  }
}

export default Nav;
