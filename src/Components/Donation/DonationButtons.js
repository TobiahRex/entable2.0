import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const DonationButtons = ({ sendGift }) => (
  <div className="donationOptions">
    <div className="giftBtnContainer">
      <button className="giftBtn" onClick={e => sendGift(e)}>
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
DonationButtons.propTypes = {
  sendGift: PropTypes.func.isRequired,
};
export default DonationButtons;
