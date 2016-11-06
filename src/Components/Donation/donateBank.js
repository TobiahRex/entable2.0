import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Footer from '../Footer';
import TextForm from './TextAddressForm';
import TransactionHistory from '../Bank/TransactionHistory';
import DonationButtons from './DonationButtons';
import TwilioActions from '../../Redux/TwilioRedux';
import StripeActions from '../../Redux/StripeRedux';

class Donation extends React.Component {
  static propTypes = {
    banks: PropTypes.arrayOf(PropTypes.object),
    routeParams: PropTypes.objectOf(PropTypes.string),
    sendText: PropTypes.func.isRequired,
    sendToken: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      bank: {},
      email: '',
      name: '',
      phone: '',
      token: '',
      currency: 'USD',
      amount: 2000,
    };
  }

  componentWillMount() {
    this.filterBank(this.props.routeParams.id, this.props.banks);
  }

  componentWillReceiveProps(nextProps) {
    this.filterBank(this.props.routeParams.id, nextProps.banks);
  }

  onInputChange = (id, value) => this.setState({ [id]: value })

  filterBank = (id, banks) => {
    const bank = banks.filter(bankObj => bankObj._id === this.props.routeParams.id);
    this.setState({ bank: bank[0] });
  }
  sendText = (e) => {
    e.preventDefault();
    /*
    1) Send user text from Backend using this phone number.
    2) Send user to the TextSuccess page.
    */
    this.props.sendText(this.state.phone);
  }

  registerAsDonor = () => {
    /*
      Send user to the Register page.
    */
  }

  sendGift = (e) => {
    e.preventDefault();
    /*
      1) Initiate Stripe Checkout process.
    */
    const handler = StripeCheckout.configure({
      key: 'pk_test_iF4PzIrhBrCmphaxI5HQWSnZ',
      image: '/favicon.ico',
      locale: 'auto',
      token: (token) => {
        this.props.sendToken(token, {
          currency: this.state.currency,
          amount: this.state.amount,
        });
      },
    });

    handler.open({
      name: 'Entable',
      description: 'Send Donation as a Gift',
      zipCode: true,
      amount: this.state.amount,
    });
    e.preventDefault();

    handler.close();
    e.preventDefault();
  }

  render() {
    window.scrollTo(0, 0);
    const mainBankImage = {
      backgroundImage: 'url("/enable-women-to-be-the-boss.jpg")',
    };

    const fakeTimeStampDelete = moment().format('lll');
    const bankName = "Women's Bank of Anlos";
    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={mainBankImage}>
            <div className="donationBankName">
              <h2>{bankName}</h2>
              <h5>
                96% of your donation goes directly to the owners of this bank.
                <br />
                4% covers USD to Bitcoin to Mpesa transaction fees of third party money handlers.
              </h5>
            </div>
            <TextForm
              onInputChange={this.onInputChange}
              sendText={this.sendText}
            />
          </div>

          <DonationButtons
            sendGift={this.sendGift}
            registerAsDonor={this.registerAsDonor}
          />

          <div className="transactionHeaderDonation">
            <h3>Bank History & Notes to Sponsors</h3>
          </div>
          <TransactionHistory />

        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  banks: state.bank.banks,
});
const mapDispatchToProps = dispatch => ({
  sendText: phone => dispatch(TwilioActions.sendText(phone)),
  sendToken: (token, info) => dispatch(StripeActions.sendToken(token, info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Donation);

<button id="customButton">Purchase</button>


// window.addEventListener('popstate', function() {
//   handler.close();
// });
