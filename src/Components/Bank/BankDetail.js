import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BankDisplay from './BankDisplay';
import Footer from '../Footer';

class BankDetail extends React.Component {
  static propTypes = {
    banks: PropTypes.arrayOf(PropTypes.object),
    routeParams: PropTypes.objectOf(PropTypes.string),
  }
  constructor() {
    super();
    this.state = {
      bank: {},
    };
  }

  componentWillMount() {
    this.filterBanks(this.props.routeParams.id, this.props.banks);
  }

  componentWillReceiveProps(nextProps) {
    this.filterBanks(this.props.routeParams.id, nextProps.banks);
  }

  filterBanks = (id, banks) => {
    let bank = {};
    bank = banks.filter(bankObj => (bankObj._id === id));
    this.setState({ bank: bank[0] });
  }

  render() {
    window.scrollTo(0, 0);
    const renderBank = this.state.bank ? <BankDisplay bank={this.state.bank} /> : 'BANK IS UNDEFINED';

    return (
      <div>
        {renderBank}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ bank }) =>
({ banks: bank.banks });

// const mapDispatchToProps = dispatch =>

export default connect(mapStateToProps, null)(BankDetail);
