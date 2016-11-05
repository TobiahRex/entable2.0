import React, { PropTypes } from 'react';

const DonationButtons = ({ sendGift, registerAsDonor }) => (
  <div className="donationOptions">
    <div className="giftBtnContainer">
      <button className="giftBtn" onClick={sendGift}>
        Send As A Gift
      </button>
    </div>
    <div className="noBtnCoinsContainer">
      <button className="noBTcoins" onClick={registerAsDonor}>
        Register as a Donor
      </button>
    </div>
  </div>
);
DonationButtons.propTypes = {
  sendGift: PropTypes.func.isRequired,
  registerAsDonor: PropTypes.func.isRequired,
};
export default DonationButtons;
