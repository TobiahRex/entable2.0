import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const BankCard = ({ bankId, image, desc1, desc2 }) => (
  <div className="col-md-4 text-center bkMargin">
    <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" role="presentation" src={image} width="100%" height="80%" />
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
        {desc2}
      </p>
    </div>
  </div>
);

BankCard.propTypes = {
  bankId: PropTypes.string.isRequired,
  image: PropTypes.string,
  desc1: PropTypes.string.isRequired,
  desc2: PropTypes.string,
};
export default BankCard;
