import React from 'react';

const BankActivity = ({ transactions }) => {
  const rows = transactions.map((transaction) => {
    return 'empty';
    // <tr key={transaction.date}>
    //   <th>Bank Member</th>
    //   <th>Date</th>
    //   <th>Borrowed Out</th>
    //   <th>Payed In</th>
    //   <th>Description</th>
    // </tr>
  });
  return (
    <div className="tableContainer">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Bank Member</th>
            <th>Date</th>
            <th>Borrowed Out</th>
            <th>Payed In</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};
export default BankActivity;
