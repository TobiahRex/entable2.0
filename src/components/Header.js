import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Header extends Component {

  


  render() {
    return (
      <header className="jm-main-header" id="section1"> 
        <div className="container">
          <div className="row jm-intro">
            <div className="col-xs-12">
              <div className="jm-header-text">
                <img src="entable_logo_final_dark.png" className="mainLogo" width="250px" />
                <h1 className="mainHeader">Not a Seat at the Table but Ownership of It.</h1>
                <h5 className="mainSubHeader">Table Banking that puts women in full control of their finances. </h5>
                <Link to={'/donation'}className="mainBtn">Fund A Bank With No Middle Men</Link>
              </div>
            </div>
          </div>{/* --- ROW --- */}
        </div>{/* --- CONTAINER --- */}
      </header>
    );
  }
}
