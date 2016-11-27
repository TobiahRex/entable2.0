import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import donorStyles from './donorStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';

class DonationPg extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }
  static breadCrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  },
  {
    href: '/donor_account',
    name: 'Profile',
    active: true,
  }]
  static styles = donorStyles;
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      name: {
        first: '',
        last: '',
      },
      acceptTerms: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('Donation Page - nextProps: ', nextProps);
  }

  componetWillUpdate(nextProps, nextState) {
    if (this.state.acceptTerms) {
      console.info('USER ACCEPTED TERMS: ', nextState.acceptTerms);
    } else {
      console.warn('User has NOT accepted Donation terms.', nextState.acceptTerms);
    }
  }

  submitDonation() {
    if (this.state.amount > 300) {
      throw Error('Sorry that donation amount is too much.  Please use our Wire Transfer form instead.');
    }
  }

  render() {
    return (
      <div style={DonationPg.styles.mainBgColor}>
        <Breadcrumbs paths={DonationPg.breadCrumbs} />
        <h1>Hello {this.props.firstName}, welcome back!</h1>
        <br />
        <h3>{'Here\'s'} {'what\'s'} happened since {'you\'ve'} been away.</h3>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});
export default connect(mapStateToProps, null)(DonationPg);
