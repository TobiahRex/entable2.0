import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Footer from '../Footer';

class BankDetail extends Component {
  static propTypes = {
    location: PropTypes.node,
  }
  constructor() {
    super();
    this.state = {
      banks: [],
    };
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ banks: nextProps.banks });
  }

  render() {
    const fakeTimeStampDelete = moment().format('lll');

    const dummy = this.props.banks;
    console.log('dummy[0]: ', dummy[0]);
    let { amountNumber } = this.props.location.query;
    if (!amountNumber) amountNumber = 0;
    let startingAmount = 0;
    let messageAmount = 0;
    let rows;
    const { banks } = this.state;

    if (banks.length) {
      const { donations } = banks.finance.transactions;

      rows = donations.map((bankDetail, index) => {
        const membersInfo = { 17148750963: 'Ziya Emanet',
        19199601124: 'Donovan Moore',
        19259973408: 'Richard Mands',
        19253534139: 'Joshua Maddox',
        14802745839: 'Holly Zhou' };
        let borrowed = 0;
        let payedIn = 0;
        const { sender, date, amount, description } = bankDetail;
        if (Number(amount) < 0) {
          borrowed = amount * (-1);
        } else {
          payedIn = amount;
        }
        messageAmount += Number(amount);
        startingAmount = Number(amountNumber) + messageAmount;
        return (
          <tr key={index}>
            <td>{membersInfo[sender]}</td>
            <td>{date}</td>
            <td>{borrowed}</td>
            <td>{payedIn}</td>
            <td>{description}</td>
          </tr>
        );
      });
    } else {
      rows = <tr />;
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 imgContainer">
              <div className="groupImg">
                <img
                  className="bankDetialImg"
                  role="presentation"
                  src={dummy[5].description.images[0]}
                />
              </div>
            </div>
            <div className="col-md-6 groupInfo">
              <div className="groupDesc">
                <div className="groupName">
                  {/* <h3>{dummy[5].description.name}</h3> */}
                </div>
                <div className="groupDesc">
                  {/* <h4>{dummy[5].description.name} Details and Information: </h4>
                    <p>{dummy[5].description.desc1}</p>
                    <p>{dummy[5].description.desc2}</p>
                  <p>{dummy[5].description.desc3}</p> */}
                </div>
                <div className="moniesDisplay">
                  <div className="startingTotal">
                    <h6>Starting Amount:</h6>
                    <h4>${amountNumber}</h4>
                  </div>
                  <div className="currentTotal">
                    <h6>Currently Held:</h6>
                    <h4>${startingAmount}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupDonateBtn">
            <button className="donateBtn">Add Funds to This Bank</button>
          </div>
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
          <div className="transactionHeader">
            <h3>Bank History & Notes to Sponsors</h3>
          </div>
          <div className="transactionHistoryContainer text-center">
            <div className="transactionItem">
              <br />
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>{String('Sara\'s')} son started school with new books.</p>
              <hr className="bankHistoryHr" />
            </div>
            <div className="transactionItem">
              <br />
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>{('Anile\'s')} farm bought breeding pigs.</p>
              <hr className="bankHistoryHr" />
            </div>
            <div className="transactionItem">
              <br />
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>Aide bought supplies to increase productivity of chicken operation.</p>
              <hr className="bankHistoryHr" />
            </div>
            <div className="transactionItem">
              <br />
              <p><span className="timeStamp">{fakeTimeStampDelete}</span> <span className="bankerName">  Betty Hascal - <i>Bank Manager</i></span></p>
              <p>{'Sarah\'s'} son started school with new books.</p>
              <hr className="bankHistoryHr" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ bank }) =>
({ banks: bank.banks });

// const mapDispatchToProps = dispatch =>

export default connect(mapStateToProps, null)(BankDetail);
