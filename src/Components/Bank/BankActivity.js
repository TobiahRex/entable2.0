import React from 'react';

/* Old Logic
if (banks.length) {
  rows = banks.map((bank, index) => {
    const membersInfo = {
      17148750963: 'Ziya Emanet',
      19199601124: 'Donovan Moore',
      19259973408: 'Richard Mands',
      19253534139: 'Joshua Maddox',
      14802745839: 'Holly Zhou',
    };

    let borrowed = 0;
    let payedIn = 0;

    // const { sender, date, amount, description } = bank;
    const { description, finance } = bank;

    if (finance.balance.current < 0) {
      borrowed = finance.balance.current * (-1);
    } else {
      payedIn = finance.balance.current;
    }

    startingAmount = finance.balance.starting;

  });
} else {
  rows = <tr />;
}
*/
const BankActivity = ({ transactions = []}) => {
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
