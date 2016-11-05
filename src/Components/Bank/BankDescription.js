import React, { PropTypes } from 'react';

const BankDescription = ({ bank }) => (
  <div className="col-md-6 groupInfo">

    <div className="groupDesc">
      <div className="groupName">
        <h3>{bank.description.name}</h3>
      </div>
      <div className="groupDesc">
        <h4>{bank.description.name} Details and Information: </h4>
        <p>{bank.description.desc1}</p>
        <p>{bank.description.desc2}</p>
        <p>{bank.description.desc3}</p>
      </div>
      <div className="moniesDisplay">
        <div className="startingTotal">
          <h6>Starting Amount:</h6>
          <h4>${bank.finance.balance.starting}</h4>
        </div>
        <div className="currentTotal">
          <h6>Currently Held:</h6>
          <h4>${bank.finance.balance.current}</h4>
        </div>
      </div>
    </div>
  </div>
);

BankDescription.propTypes = {
  bank: PropTypes.objectOf(PropTypes.object),
};
export default BankDescription;
