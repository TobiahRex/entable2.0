import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import TextForm from '../Donation/TextAddressForm';
import TransactionHistory from '../Bank/TransactionHistory';
import DonationButtons from '../Donation/DonationButtons';
import TwilioActions from '../../Redux/TwilioRedux';

class Donation extends React.Component {
  static propTypes = {
    sendText: PropTypes.func.isRequired,
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

  componentWillUpdate(nextProps, nextState) {
    console.log('nextState', nextState);
    console.log('nextProps', nextProps);
  }

  onInputChange = (id, value) => this.setState({ [id]: value })

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
        console.log('thanks for the donation', token);
      },
    });

    handler.open({
      name: 'Entable',
      description: 'Send Donation as a Gift',
      zipCode: true,
      amount: this.state.amount,
    });
    event.preventDefault();

    handler.close();
    event.preventDefault();
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
        backgroundImage: 'url("/mbola-tanzania-feature.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#222',
      },
    };

    return (
      <div>
        <div className=" donationContainer">
          <div className="bankImgBanner" style={styles.bankImage}>
            <div style={styles.bankDiv} className="donationBankName">
              <h2 style={styles.bankName}>Mbola Village Bank</h2>
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

const mapDispatchToProps = dispatch => ({
  sendText: phone => dispatch(TwilioActions.sendText(phone)),
});

export default connect(null, mapDispatchToProps)(Donation);
