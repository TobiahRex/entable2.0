import React, { PropTypes } from 'react';

const AddFunds = () => (
  <div className="groupDonateBtn">
    <button className="donateBtn">Add Funds to This Bank</button>
  </div>
);
AddFunds.propTypes = {
  bankId: PropTypes.string,
};
export default AddFunds;
