import React from 'react';
import moment from 'moment';

import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';

import createBankPgStyles from './createBankPgStyles';

class CreateBank extends React.Component {
  static propTypes = {

  }
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
        <div style={CreateBank.styles.mainBgColor}>
          <Breadcrumbs paths={CreateBank.breadcrumbs} />
          <h2>Create Bank</h2>
          <div id="bankName">
            <h2>
              Bank Name - {bankName}
            </h2>
          </div>
          <div id="welcomeBalances">
            <div>
              <h4>Current Balance</h4>
              <div>{currentBal}</div>
            </div>
            <div>
              <h4>Starting Balance</h4>
              <div>{startingBal}</div>
            </div>
            <div>
              <h4>Growth</h4>
              <div>{growthBal}</div>
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
