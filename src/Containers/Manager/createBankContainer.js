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
            <br/>
            <p>Click the "Create Bank" button below to get started.</p>
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
                <label htmlFor="bankCity">Bank City</label>
                <input type="text" id="bankCity" />
              </div>
              <div style={CreateBank.styles.bankPhoneInput}>
                <label htmlFor="bankPhone">Bank Phone</label>
                <input type="text" id="bankPhone" />
              </div>
            </div>

          </div>
          <div id="addTransContainer">
            <div>
              <button onClick={() => console.log('click')}>
                {ddButtonTitle}
              </button>
            </div>
          </div>
          <div id="hiddenDropDown">
            <div id="dropDownInputContainer">
              <div>
                <label htmlFor="bankName">
                  Bank Name
                </label>
                <input
                  id="bankName"
                  type="text"
                  disabled value={bankName}
                />
              </div>
              <div>
                <label htmlFor="transDate">
                  Date
                </label>
                <input
                  id="transDate"
                  type="text"
                  disabled
                  value={currentDate}
                />
              </div>
              <div>
                <label htmlFor="member">
                  Member Name
                </label>
                <input
                  id="member"
                  type="text"
                  value={this.state.transMember}
                  onChange={e =>
                    this.setState({ member: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="transDesc">
                  Transaction Description
                </label>
                <input
                  id="transDesc"
                  type="text"
                  value={bankName}
                  onChange={e =>
                    this.setState({ description: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="transAmount">
                  Transaction Amount
                </label>
                <input
                  id="transAmount"
                  type="text"
                  value={this.state.amount}
                  onChange={e =>
                    this.setState({ amount: e.target.value })
                  }
                />
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
          <div id="bankHistoryTitle">
            <h4>
              Bank History & Notes for Donors
            </h4>
          </div>
          <div id="bankHistoryContainer">
            {'this.renderHistory()'}
          </div>
        </div>
      </div>
    );
  }
}
export default CreateBank;
