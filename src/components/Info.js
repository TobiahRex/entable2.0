import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div className="contianer-fliud">
        <div className="informationContainer">
          <div className="infoHowItWorks col-sm-6">
            <div className="information">
              <div className="num">
                1
              </div>
              <h6>Women in under-served communities send an SMS to register & open a new bank</h6>
            </div>
            <div className="information">
              <div className="num">
                2
              </div>
              <h6>Visitors can browse banks, follow impact and donate directly to bankers using m-pesa</h6>
            </div>
            <div className="information">
              <div className="num">
                3
              </div>
              <h6>Bankers gather once per month to borrow & lend at rates and amounts of their choosing</h6>
            </div>
            <div className="information">
              <div className="num">
                4
              </div>
              <h6>Using Tropo's SMS API, bankers subimit transactions and updates directly to entable</h6>
            </div>
          </div>
          <div className="infoFormContainer col-sm-6">
            <div className="infoTextHeader">
              <h4>Learn How Table Banking Changes Communities</h4>
            </div>
            <form className="infoForm">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-default btn-block btnHome">Learn More</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
