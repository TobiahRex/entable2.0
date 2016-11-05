import React from 'react';
import { browserHistory } from 'react-router';

const BankCard = ({ key, image, desc1, desc2 }) => (
  <div className="col-md-4 text-center bkMargin">
    <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" role="presentation" src={image} width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
        <button
          className="bankViewBtn"
          onClick={() => browserHistory.push(`/donation/${key}`)}
        >
          Fund Bank
        </button>
        <button
          className="bankViewBtn"
          onClick={() => browserHistory.push(`/bank/${key}`)}
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

export default BankCard;
