import React from 'react';
import { browserHistory } from 'react-router';

const DonationButtons = () => (
  <div className="donationOptions">
    <div className="giftBtnContainer">
      <button className="giftBtn" onClick={() => browserHistory.push('/donate')}>
        Send As A Gift
      </button>
    </div>
    <div className="noBtnCoinsContainer">
      <button
        className="noBTcoins"
        onClick={() => browserHistory.push('/register')}
      >
        Register as a Donor
      </button>
    </div>
  </div>
);
export default DonationButtons;
