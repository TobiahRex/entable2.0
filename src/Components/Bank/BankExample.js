import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Footer from '../Footer';
import TextForm from '../Donation/TextAddressForm';
import BankManagerNotes from '../Bank/BankManagerNotes';
import DonationButtons from '../Donation/DonationButtons';
import TwilioActions from '../../Redux/TwilioRedux';
import Breadcrumbs from '../Breadcrumb';

import AmountModal from '../../Containers/AmountModal';

class Donation extends React.Component {
  static propTypes = {
    sendText: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.exampleNotes = [
      {
        _id: 123,
        date: moment().format('lll'),
        name: 'Betty Hascal',
        role: 'Bank Manager',
        description: 'Sarah bought school books for her son with 1500 MPESA withdrawal.',
      },
      {
        _id: 234,
        date: moment().format('lll'),
        name: 'Betty Hascal',
        role: 'Bank Manager',
        description: 'Rachael paid for his sons hospital bills with 25,000 MPESA.',
      },
      {
        _id: 345,
        date: moment().format('lll'),
        name: 'Betty Hascal',
        role: 'Bank Manager',
        description: 'Bernice bought food for her family with 3,000 MPESA after not eating for 2 weeks.',
      },
    ];
    this.state = {
      bank: {},
      email: '',
      name: '',
      phone: '',
      token: '',
      currency: 'USD',
      amount: 0,
      showModal: false,
    };

    this.breadCrumbs = [{
      href: '/',
      name: 'Home',
      active: false,
    }, {
      href: '/example',
      name: 'Bank Example',
      active: true,
    }];

    this.styles = {
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
        backgroundImage: 'url("/assets/images/mbola-tanzania-feature.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#222',
      },
    };
  }

  onInputChange = (id, value) => this.setState({ [id]: value })

  showAmountModal = () => this.setState({ showModal: true });

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
      image: '/assets/favicon.ico',
      locale: 'auto',
      token: (token) => {
        console.log('thanks for the donation', token);
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

  submit = (e) => {
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

  showAmountModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false })

  render() {
    return (
      <div>
        <Breadcrumbs paths={this.breadCrumbs} />
        <div className="donationContainer">
          <div className="bankImgBanner" style={this.styles.bankImage}>
            <div style={this.styles.bankDiv} className="donationBankName">
              <h2 style={this.styles.bankName}>Mbola Village Bank</h2>
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
          <BankManagerNotes note={this.exampleNotes} />
        </div>
        <div>
          <Footer />
        </div>
        <AmountModal
          showModal={this.state.showModal}
          verifyOtherAmount={this.verifyOtherAmount}
          submit={this.submit}
          close={this.closeModal}
          sendGift={this.sendGift}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  sendText: phone => dispatch(TwilioActions.sendText(phone)),
});

export default connect(null, mapDispatchToProps)(Donation);
