import React, { PropTypes } from 'react';

const BankSplashImage = ({ images }) => (
  <div className="col-md-6 imgContainer">
    <div className="groupImg">
      <img
        className="bankDetialImg"
        role="presentation"
        src={images[0]}
      />
    </div>
  </div>
);
BankSplashImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};
export default BankSplashImage;
