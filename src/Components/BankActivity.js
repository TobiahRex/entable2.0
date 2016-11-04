import React from 'react';

const BankActivity = ({ banks }) => {
  const rows = banks.map((bank) => {
    return 'empty';
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
