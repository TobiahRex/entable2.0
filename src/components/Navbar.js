import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img src="entable_logo_final_white.png" height="20px"/></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="mainNavLink"><Link to="bank">Bank Example</Link></li>
              <li className="mainNavLink"><Link to="donation">Sponsor a Bank</Link></li>
            </ul>
          </div>
        </div>
      </nav>
        {this.props.children}
      </div>
    )
  }
};
