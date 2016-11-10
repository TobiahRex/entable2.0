import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const AddFunds = ({ _id }) => (
  <div className="groupDonateBtn">
    <button onClick={() => browserHistory.push(`/donation/${_id}`)} className="donateBtn">Add Funds to This Bank</button>
  </div>
);
AddFunds.propTypes = {
  _id: PropTypes.string,
};
export default AddFunds;
