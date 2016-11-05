import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// ------------------ Components ------------------
import Footer from '../Components/Footer';
import BankDisplay from '../Components/Bank/BankHistory';

class BanksContainer extends Component {
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

  renderBanks = () => this.state.banks.map(bank =>
    <BankDisplay key={bank._id} bank={bank} />
  )

  render = () => (
    <div>
      {this.renderBanks()}
      <Footer />
    </div>
  );
}
const mapStateToProps = ({ bank }) =>
({ banks: bank.banks });

// const mapDispatchToProps = dispatch =>

export default connect(mapStateToProps, null)(BanksContainer);
