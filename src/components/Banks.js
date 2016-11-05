import React, { PropTypes } from 'react';
import BankCard from '../Components/Bank/BankCard';

const Banks = ({ banks }) => {
  let bankList = [];
  if (banks.length) {
    bankList = banks.map(bank => (
      <BankCard
        key={bank._id}
        bankId={bank._id}
        image={bank.description.images[0]}
        desc1={bank.description.desc1}
        desc2={bank.description.desc2}
      />)
    );
  } else {
    bankList = [];
  }

  return (
    <div className="banksContainer">
      <div className="bankCallToAction">
        <h4>Entable is an SMS (Tropo) powered table banking platform
          that pairs under-served women without access to financial
        services to sponsors seeking complete transparency and direct impact.</h4>
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
