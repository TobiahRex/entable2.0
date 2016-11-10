import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const BankCard = ({ name, bankId, image, desc1, desc2 }) => (
  <div className="col-md-4 text-center bkMargin">
    <div className="bankSingleDisplay panel panel-default">
      <p className="bankCardName">
        {name}
      </p>
      <img
        className="bankImg"
        role="presentation"
        src={image}
        width="100%"
        height="80%"
      />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
        <button
          className="bankViewBtn"
          onClick={() => browserHistory.push(`/donation/${bankId}`)}
        >
          Fund Bank
        </button>
        <button
          className="bankViewBtn"
          onClick={() => browserHistory.push(`/bank/${bankId}`)}
        >
          View Bank
        </button>
      </div>
      <p className="bankViewDesc">
        {desc1}
      </p>
    </div>
  </div>
);

BankCard.propTypes = {
  name: PropTypes.string.isRequired,
  bankId: PropTypes.string.isRequired,
  image: PropTypes.string,
  desc1: PropTypes.string.isRequired,
  desc2: PropTypes.string,
};
export default BankCard;
