import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Footer from '../Footer';
import TextForm from './TextAddressForm';

export default class Donation extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      phone: '',
    };
  }


  onInputChange = (id, value) => this.setState({ [id]: value })

  sendText = (e) => {
    e.preventDefault();
    /*
    1) Send user text from Backend using this phone number.
    2) Send user to the TextSuccess page.
    */
  }

  registerAsDonor = () => {
    /*
      Send user to the Register page.
    */
  }

  sendGift = () => {
    /*
      1) Initiate Stripe Checkout process.
    */
  }

  render() {
    window.scrollTo(0, 0);
    const mainBankImage = {
      backgroundImage: 'url("/enable-women-to-be-the-boss.jpg")',
    };

    const fakeTimeStampDelete = moment().format('lll');
    const bankName = "Women's Bank of Anlos";
    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={mainBankImage}>
            <div className="donationBankName">
              <h2>{bankName}</h2>
              <h5>
                96% of your donation goes directly to the owners of this bank.
                <br />
                4% covers USD to Bitcoin to Mpesa transaction fees of third party money handlers.
              </h5>
            </div>

          </div>

          <div className="donationOptions">
            <div className="giftBtnContainer">
              <button className="giftBtn">Send As A Gift</button>
            </div>
            <div className="noBtnCoinsContainer">
              <button className="noBTcoins">Register as a Donor</button>
            </div>
          </div>

          <div className="transactionHeaderDonation">
            <h3>Bank History & Notes to Sponsors</h3>
          </div>

          <div className="transactionHistoryContainer text-center">
            <div className="transactionItem">
              <h6>{String('')}</h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>{('Sarah\'s')} son started school with new books.</p>
              <hr className="bankHistoryHr" />
            </div>
            <div className="transactionItem">
              <h6>{String('')}</h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>{('Anile\'s')} farm bought breeding pigs.</p>
              <hr className="bankHistoryHr" />
            </div>
            <div className="transactionItem">
              <h6>{String('')}</h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Aide bought supplies to increase productivity of chicken operation.</p>
              <hr className="bankHistoryHr" />
            </div>
            <div className="transactionItem">
              <h6>{String('')}</h6>
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>{('Sarah\'s')} son started school with new books.</p>
              <hr className="bankHistoryHr" />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
