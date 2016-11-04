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

    

    const banks = this.state.banks.map(bank =>
      <BankDisplay key={bank._id} bank={bank} />
    );

    return (
      <div>
      {banks}
      <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ bank }) =>
({ banks: bank.banks });

// const mapDispatchToProps = dispatch =>

export default connect(mapStateToProps, null)(BankDetail);
