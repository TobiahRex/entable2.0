import React from 'react';

const BankDisplay = ({ bank }) => {

  return (
    <div className="container-fluid">

      <div className="row">
        {/* This component depicts one of the images from the Banks data set. */}
        <BankImage />

        {/* BankDescription simply displays all the relevant information about the Bank. */}
        <BankDescription />
      </div>

      {/* This button should navigate them to "/donation" with this banks information*/}
      <AddFundsButton />

      {/* This component receives an array of all the transactions. */}
      <BankActivity transactions={this.state.banks} />

      <BankHistory history={this.state.history || ''} />

    </div>
  );
};
export default BankDisplay;
