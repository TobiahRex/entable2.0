import React, { PropTypes } from 'react';

const BankDescription = ({ description, finance }) => (
  <div className="col-md-6 groupInfo">

    <div className="groupDesc">
      <div className="groupName">
        <h3>{description.name}</h3>
      </div>
      <div className="groupDesc">
        <h4>{description.name} Details and Information: </h4>
        <p>{description.desc1}</p>
        <p>{description.desc2}</p>
        <p>{description.desc3}</p>
      </div>
      <div className="moniesDisplay">
        <div className="startingTotal">
          <h6>Starting Amount:</h6>
          <h4>${finance.balance.starting}</h4>
        </div>
        <div className="currentTotal">
          <h6>Currently Held:</h6>
          <h4>${finance.balance.current}</h4>
        </div>
      </div>
    </div>
  </div>
);

BankDescription.propTypes = {
  description: PropTypes.objectOf(PropTypes.string),
  finance: PropTypes.objectOf(PropTypes.object),
};
export default BankDescription;
