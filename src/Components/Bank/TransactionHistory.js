import React, { PropTypes, PureComponent } from 'react';

class TransactionHistory extends PureComponent {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
  }
  renderTransactions = () =>
  this.props.transactions.map(trans => (
    <div className="transactionItem" key={trans._id}>
      <br />
      <p>
        <span className="timeStamp">{trans.date}</span>
        <span className="bankerName">{trans.name} - <i>{trans.role}</i>
        </span>
      </p>
      <p>{trans.description}</p>
      <hr className="bankHistoryHr" />
    </div>
  ))
  render() {
    return (
      <span>
        <div className="transactionHistoryContainer text-center">
          {this.renderTransactions()}
        </div>
      </span>
    );
  }
}

export default TransactionHistory;
