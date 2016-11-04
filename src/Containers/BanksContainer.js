import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// ------------------ Components ------------------
import Footer from '../Components/Footer';
import BankHistory from '../Components/BankHistory';
import AddFundsButton from '../Components/AddFundsButton';
import BankActivity from '../Components/BankActivity';

class BankDetail extends Component {
  static propTypes = {
    location: PropTypes.node,
  }

  constructor() {
    super();
    this.state = {
      banks: [],
      history: '<empty>',
    };
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ banks: nextProps.banks });
  }

  render() {
    const fakeTimeStampDelete = moment().format('lll');

    const { banks } = this.state;
    let { amountNumber } = this.props.location.query;
    let startingAmount = 0;
    let rows;

    if (!amountNumber) amountNumber = 0;

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

        return (
          <tr key={index}>
            {/* <td>{membersInfo[sender]}</td>
              <td>{date}</td>
              <td>{borrowed}</td>
              <td>{payedIn}</td>
            <td>{description}</td> */}
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
            {/* This component depicts one of the images from the Banks data set. */}
            <BankImage />
            
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

          {/* This button should navigate them to "/donation" with this banks information*/}
          <AddFundsButton />

          {/* This component receives an array of all the transactions. */}
          <BankActivity transactions={this.state.banks} />

          <BankHistory history={this.state.history || ''} />

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
