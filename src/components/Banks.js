import React, { PropTypes } from 'react';
import BankCard from '../Components/Bank/BankCard';

const Banks = ({ banks }) => {
  let bankList = [];
  if (banks.length) {
    bankList = banks.map(bank => (
      <BankCard
        name={bank.description.name}
        key={bank._id}
        bankId={bank._id}
        image={`/assets/images/${bank.description.images[0]}`}
        desc1={bank.description.desc1}
      />)
    );
  } else {
    bankList = [];
  }

  return (
    <div className="banksContainer">
      <div className="bankCallToAction">
        <h4>Entable is an SMS (Twilio) powered table banking platform
          that pairs under - served women
        - without access to financial services -  to sponsors seeking complete transparency and direct impact.</h4>
      </div>
      <div className="row bankRows">
        <div className="container">

          {bankList}

        </div>
      </div>
    </div>
  );
};
Banks.propTypes = {
  banks: PropTypes.arrayOf(PropTypes.object),
};
export default Banks;
