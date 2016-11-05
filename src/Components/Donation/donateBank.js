import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Footer from '../Footer';
import TextForm from './TextAddressForm';
import TransactionHistory from '../Bank/TransactionHistory';

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
            <TextForm
              onInputChange={this.onInputChange}
              sendText={this.sendText}
            />
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

          <TransactionHistory />

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
