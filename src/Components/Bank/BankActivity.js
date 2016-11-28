import React, { PropTypes, PureComponent } from 'react';

class BankActivity extends PureComponent {
  static propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
  }
  renderRows = () =>
  this.props.transactions.map(trans => (
    <tr key={trans.date}>
      <td>{trans.name}</td>
      <td>{trans.date}</td>
      <td>{trans.role}</td>
      <td>{trans.withdrawal ? trans.amount : 0}</td>
      <td>{trans.donated ? trans.amount : 0}</td>
      <td>{trans.description}</td>
    </tr>
  ));

  render() {
    return (
      <div className="tableContainer">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Bank Member</th>
              <th>Date</th>
              <th>Role</th>
              <th>Borrowed Out</th>
              <th>Payed In</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BankActivity;
