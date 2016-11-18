import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Footer from '../Footer';
import TextForm from './TextAddressForm';
import TransactionHistory from '../Bank/TransactionHistory';
import DonationButtons from './DonationButtons';
import TwilioActions from '../../Redux/TwilioRedux';
import StripeActions from '../../Redux/StripeRedux';
import DonationActions from '../../Redux/DonationRedux';

class Donation extends React.Component {
  static propTypes = {
    banks: PropTypes.arrayOf(PropTypes.object),
    routeParams: PropTypes.objectOf(PropTypes.string),
    sendText: PropTypes.func.isRequired,
    sendToken: PropTypes.func.isRequired,
    sendDonation: PropTypes.func.isRequired,
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
      otherAmount: '0.00',
      showModa: false,
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
        this.props.sendDonation(this.state.amount);
      },
    });

    handler.open({
      name: 'Entable',
      description: 'Send Donation as a Gift',
      zipCode: true,
      amount: this.state.amount,
    });
    handler.close();
  }

  showOtherAmountModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    window.scrollTo(0, 0);

    const styles = {
      bankName: {
        backgroundColor: '#2ecc71',
        paddingTop: 10,
        paddingRight: 40,
        paddingBottom: 10,
        paddingLeft: 40,
        margin: 30,
        color: '#fff',
        width: 300,
        alignSelf: 'center',
        flexDirection: 'column',
      },
      bankDiv: {
        display: 'flex',
      },
      bankImage: {
        backgroundImage: `url("/${this.state.bank.description.images[0]}")`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#222',
      },
    };

    const fakeTimeStampDelete = moment().format('lll');
    const bankName = this.state.bank.description.name;

    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={styles.bankImage}>
            <div style={styles.bankDiv} className="donationBankName">
              <h2 style={styles.bankName}>{bankName}</h2>
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
          <div className="priceOptions">
            <div className="giftBtnContainer">
              <button className="giftPrice">$10</button>
              <button className="giftPrice">$20</button>
              <button className="giftPrice">$50</button>
              <button className="giftPrice">$100</button>
              <button
                className="giftPrice otherPrice"
                onClick={this.showOtherAmountModal}
              >
                Other Amount
              </button>
            </div>
            <div>
              <p className="priceText">$10.00 is the minimum donation online.  All donations are tax deductible.
              </p>
            </div>
          </div>
          <DonationButtons
            sendGift={e => this.sendGift(e)}
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
  sendDonation: amount => dispatch(DonationActions.sendDonation(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Donation);
