import React from 'react';
import moment from 'moment';
import Breadcrumbs from '../../Components/Breadcrumb';
import createBankPgStyles from './createBankPgStyles';

class CreateBank extends React.Component {
  static styles = createBankPgStyles
  static breadcrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  }, {
    href: '',
    name: 'Manager Account',
    active: true,
  }];
  constructor(props) {
    super(props);

    this.state = {
      bankName: '',
      date: moment().format('lll'),
    };
  }

  render() {
    const bankName = '<BankName>';
    const currentBal = '<Current Balance>';
    const startingBal = '<Starting Balance>';
    const growthBal = '<Growth Balance>';
    const ddButtonTitle = '<dd Button Bal>';
    const currentDate = moment().format('lll');
    return (
      <div>
        <Breadcrumbs paths={CreateBank.breadcrumbs} />
        <div style={CreateBank.styles.mainContainer}>
          <div id="ctaWelcomeMessage">
            <h4>Thanks for Becoming a Bank Manager</h4>
            <p>{'Let\'s'} get started by creating a Virtual Bank on Entable is where you will manage and record the distribution of Donations to Bank members in your area as well as their return payments to the Bank.</p>
            <br />
            <p>Click the {'"Create Bank"'} button below to get started.</p>
          </div>
          <div id="welcomeBalances">
            <div id="createBankContainer">
              <button>Create Bank</button>
            </div>
            <div style={CreateBank.styles.createBankForm}>
              <div style={CreateBank.styles.bankNameInput}>
                <label htmlFor="bankName">Bank Name</label>
                <input type="text" id="bankName" />
              </div>
              <div style={CreateBank.styles.bankCountryInput}>
                <label htmlFor="bankCountry">Country</label>
                <input type="text" id="bankCountry" />
              </div>
              <div style={CreateBank.styles.bankCityInput}>
                <label htmlFor="bankCity">City</label>
                <input type="text" id="bankCity" />
              </div>
              <div style={CreateBank.styles.bankPhoneInput}>
                <label htmlFor="bankPhone">Phone</label>
                <input type="text" id="bankPhone" />
              </div>
            </div>

          </div>
          <div>
            <label htmlFor="transPhoto">
              Transaction Photo
            </label>
            <input
              id="transPhoto"
              type="text"
              value={this.state.photoUrl}
              onChange={e =>
                this.setState({ photoUrl: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="transLegal">
              Legal Agreement
            </label>
            <input
              id="transLegal"
              type="checkbox"
              value={this.state.agreement}
              onChange={e =>
                this.setState({ agreement: e.target.value })
              }
            />
          </div>
          <div id="submitTransaction">
            <button onClick={() => console.log('submit transaction')}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateBank;
