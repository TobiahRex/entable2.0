import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import Footer from '../Footer';
import TextForm from './TextAddressForm';
import BankManagerNotes from '../Bank/BankManagerNotes';
import DonationButtons from './DonationButtons';
import TwilioActions from '../../Redux/TwilioRedux';
import StripeActions from '../../Redux/StripeRedux';
import DonationActions from '../../Redux/DonationRedux';
import AmountModal from '../../Containers/AmountModal';
import guestDonationStyles from './guestDonationStyles';

class GuestDonation extends React.Component {
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
      amount: 0,
      otherAmount: '0.00',
      showModal: false,
    };
    this.styles = guestDonationStyles;
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

  submit = (e) => {
    console.log('e: ', e);
    e.preventDefault();
    if (Number(this.state.amount) < 10) {
      alert('Please choose an amount to donate from the options listed, or select "Other Amount" to create a custom amount.');
    } else {
      this.sendGift(null, this.state.amount);
    }
  }

  verifyOtherAmount = (amountString) => {
    const amount = Number(amountString);
    if (amount > 3000) {
      alert('That amount is too large.  Please choose an amount less than $3000');
    } else {
      this.setState({ amount });
    }
  }

  sendGift = (e, amount) => {
    if (e) e.preventDefault();

    if (amount === '0') {
      return alert('Please choose a donation amount.');
    }
    const handler = StripeCheckout.configure({
      key: 'pk_test_iF4PzIrhBrCmphaxI5HQWSnZ',
      image: '/assets/favicon.ico',
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
      amount: Number(`${amount}00`),
    });

    return handler.close();
  }

  showAmountModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false })

  render() {
    window.scrollTo(0, 0);

    const { notes } = this.state.bank || { notes: [] };
    const { name } = this.state.bank ? this.state.bank.description : '';
    if (this.state.bank) {
      this.styles.bankImage.backgroundImage = `url("/assets/images/${this.state.bank.description.images[0]}")`;
    }

    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={this.styles.bankImage}>
            <div style={this.styles.bankDiv} className="donationBankName">
              <h2 style={this.styles.bankName}>{name}</h2>
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
              <button
                className="giftPrice"
                onClick={() => this.setState({ amount: 10 })}
              >$10</button>
              <button
                className="giftPrice"
                onClick={() => this.setState({ amount: 20 })}
              >$20</button>
              <button
                className="giftPrice"
                onClick={() => this.setState({ amount: 50 })}
              >$50</button>
              <button
                className="giftPrice"
                onClick={() => this.setState({ amount: 100 })}
              >$100</button>
              <button
                className="giftPrice otherPrice"
                type="button"
                onClick={this.showAmountModal}
              >
                Other Amount
              </button>
            </div>
            <div>
              <p className="priceText">$10.00 is the minimum online donation.  All donations are tax deductible.
              </p>
            </div>
          </div>
          <DonationButtons
            sendGift={e => this.sendGift(e, this.state.amount)}
            registerAsDonor={this.registerAsDonor}
          />
          <div className="transactionHeaderDonation">
            <h3>Bank History & Notes to Sponsors</h3>
          </div>
          <BankManagerNotes notes={notes} />
        </div>
        <div>
          <Footer />
        </div>
        <AmountModal
          showModal={this.state.showModal}
          verifyOtherAmount={this.verifyOtherAmount}
          submit={e => this.submit(e)}
          close={this.closeModal}
          sendGift={this.sendGift}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(GuestDonation);
