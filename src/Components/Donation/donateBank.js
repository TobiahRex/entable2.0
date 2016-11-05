import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Footer from '../Footer';
import TextForm from './TextAddressForm';
import TransactionHistory from '../Bank/TransactionHistory';
import DonationButtons from './DonationButtons';

class Donation extends React.Component {
  static propTypes = {
    banks: PropTypes.arrayOf(PropTypes.object),
    routeParams: PropTypes.objectOf(PropTypes.string),
  }
  constructor() {
    super();
    this.state = {
      bank: {},
      email: '',
      name: '',
      phone: '',
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
  }

  registerAsDonor = () => {
    /*
      Send user to the Register page.
    */
  }

  sendGift = () => {
    /*
      1) Initiate Stripe Checkout process.
    */
  }

  render() {
    console.log('this.state: ', this.state);
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

export default connect(mapStateToProps, null)(Donation);
