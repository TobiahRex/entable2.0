import React, { PropTypes } from 'react';

import BankImage from './BankSplashImg';
import BankDescription from './BankDescription';
import AddFundsButton from '../AddFundsButton';
import BankActivity from './BankActivity';
import BankManagerNotes from './BankManagerNotes';

/* TODO
  Need to fix Bank Activity and BankManager Notes below
*/

const BankDisplay = ({ bank }) => (
  <div className="container-fluid">
    <div className="row">

      <BankImage images={bank.description.images} />
      <BankDescription
        description={bank.description}
        finance={bank.finance}
      />
    </div>
    <AddFundsButton _id={bank._id} />
    {/* <BankActivity transactions={bank.transactions} /> */}
    {/* <BankManagerNotes notes={bank.transactions} /> */}
  </div>
);

BankDisplay.propTypes = {
  bank: PropTypes.shape({
    _id: PropTypes.string,
    transactions: PropTypes.objectOf(PropTypes.object),
    finance: PropTypes.objectOf(PropTypes.object),
    description: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};
export default BankDisplay;
