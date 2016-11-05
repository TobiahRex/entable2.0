import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import BankImage from './BankSplashImg';
import BankDescription from './BankDescription';
import AddFundsButton from '../AddFundsButton';
import BankActivity from './BankActivity';
import TransactionHistory from './TransactionHistory';

const BankDisplay = ({ bank }) => (
  <div className="container-fluid">
    <div className="row">

      <BankImage images={bank.description.images} />
      <BankDescription
        description={bank.description}
        finance={bank.finance}
      />
    </div>

    <AddFundsButton
      onClick={() => browserHistory.push(`/donation/${bank._id}`)}
    />
    <BankActivity transactions={bank.transactions} />
    <TransactionHistory history={bank.history || ''} />

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
