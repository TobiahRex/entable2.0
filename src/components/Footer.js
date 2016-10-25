import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container-fluid footer">
          <div className="container">
            <div className="col-md-4">
              <h6 className="footerTitle">More On Table Banking</h6>
              <ul>
                <li><a href="http://www.un.org/africarenewal/magazine/august-2015/loans-women-smart-economics">UN on Table Banking</a></li>
                <li><a href="http://joywo.org/table-banking/">JoyWo Table Banking</a></li>
                <li><a herf="https://www.theguardian.com/global-development/2014/nov/14/table-banking-kenya-women-poverty">Guardian & Trizah Chebet's Story</a></li>
                <li><a href="http://www.startupacademy.co.ke/blog/chamas-and-table-banking-a-viable-source-of-funding/">Chamas and Table Banking</a></li>
              </ul>
            </div>
            <div className="col-md-8">
              <h6 className="footerTitle">What is Table Banking?</h6>
              <p>A table bank starts with a small sum of money ranging from 300.00 - 3,000.00 USD. The starting funds are controlled by a board of women from surrounding villages. Together they decide who is leant money, the rates and the terms.</p>
              <p>The bankers meet once per month to make scheduled repayments and futher lending decisions, putting the bankers in 100% control of their finances. </p>
            </div>
          </div>
        </footer>
        <div className='container-fluid credits'>
          <p>A project by: Holly Zhou - Ziya Emanet - Donavon Moore - Richard Mands - Joshua Maddox </p>
        </div>
      </div>
  )
  }
};
