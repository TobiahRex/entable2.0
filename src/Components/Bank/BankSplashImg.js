import React from 'react';

const BankSplashImage = ({ image }) => (
  <div className="col-md-6 imgContainer">
    <div className="groupImg">
      <img
        className="bankDetialImg"
        role="presentation"
        src={image}
      />
    </div>
  </div>
);
export default BankSplashImage;
