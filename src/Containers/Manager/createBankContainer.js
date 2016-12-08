import React from 'react';
import moment from 'moment';
import { Collapse, DropdownButton, MenuItem } from 'react-bootstrap/lib';
import Breadcrumbs from '../../Components/Breadcrumb';
import createBankPgStyles from './createBankPgStyles';
import Inputcard from '../../Components/InputCard';
import Countries from '../../Services/CountryConstants';

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
  static PROPS = {
    bankName: {
      id: 'bankName',
      type: 'text',
      name: 'Bank Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
      placeholder: 'Butombo Village Bank',
    },
    bankCity: {
      id: 'bankCity',
      type: 'text',
      name: 'City',
      required: true,
      vSuccess: 3,
      vWarn: 1,
      vError: 2,
    },
    phone: {
      id: 'phone',
      name: 'Phone Number',
      required: true,
      requiredMsg: ' 1234567890',
      vSuccess: 9,
      vWarning: 8,
      vError: 1,
    },
    photoUrl: {
      id: 'photoUrl',
      name: 'Bank Photo',
      required: true,
      requiredMsg: ' http://i.imgur.com/bankphoto.png',
      vSuccess: 12,
      vWarning: 11,
      vError: 1,
    },
  }
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('lll'),
      dropDownOpen: false,
      bankName: '',
      bankCountry: {
        name: 'Choose Country',
        code: null,
      },
      bankCity: '',
      phone: '',
      photoUrl: '',
      agreement: false,
      hover: false,
    };

    this.countries = Countries.map((country, i) => (
      <MenuItem
        key={`country${i}`}
        eventKey={i + 1}
        onClick={() =>
          this.onInputChange({
            name: country.name,
            code: country.code,
          }, 'bankCountry')
        }
      >{country.name} - ({country.code})
      </MenuItem>));
  }

  onInputChange = (value, id) =>
  this.setState({ [id]: value });

  toggleDropdown = () =>
  this.setState(({ dropDownOpen }) => ({ dropDownOpen: !dropDownOpen }));

  validate = (id, vSuccess, vWarn, vError) => { //eslint-disable-line
    const inputs = ['bankName', 'bankCity', 'bankCountry', 'phone', 'photoUrl'];
    if (inputs.includes(id)) {
      const length = this.state[id].length;
      if (length > vSuccess) return 'success';
      else if (length > vWarn) return 'warning';
      else if (length > vError) return 'error';
    }
  }

  toggleHover = () => this.setState(({ hover }) =>
  this.setState({ hover: !hover }))

  render() {
    const bankName = '<BankName>';
    const currentBal = '<Current Balance>';
    const startingBal = '<Starting Balance>';
    const growthBal = '<Growth Balance>';
    const ddButtonTitle = '<dd Button Bal>';
    const currentDate = moment().format('lll');
    console.log('dropDownOpen: ', this.state.dropDownOpen);
    return (
      <div>
        <Breadcrumbs paths={CreateBank.breadcrumbs} />
        <div style={CreateBank.styles.mainContainer}>
          <div id="ctaWelcomeMessage">
            <h4>Thanks for Becoming a Bank Manager</h4>
            <p>{'Let\'s'} get started by creating a Virtual Bank on Entable.</p>
            <p>This virtual bank is where you will manage and record the distribution of Donations to Bank members in your area, as well track and document their return payments to the Bank.</p>
            <p>Bank managers track the distribution of the donated funds "out, and the re-payments "in". Future and Past donors will be relying on the Bank Managers to provide transparent and reliable transaction information.</p>
            <br />
            <p>Click the {'"Create Bank"'} button below to get started.</p>
          </div>
          <div id="welcomeBalances">
            <div id="createBankContainer">
              <button
                style={CreateBank.styles.createBnkBtnContainer}
                onClick={this.toggleDropdown}
              >
                {this.state.dropDownOpen ? 'Cancel' : 'Create Bank'}
              </button>
              <Collapse in={this.state.dropDownOpen}>
                <div>
                  <well>
                    <div style={CreateBank.styles.createBankForm}>
                      <Inputcard
                        {...CreateBank.PROPS.bankName}
                        onInputChange={this.onInputChange}
                        value={this.state.bankName}
                        validate={this.validate}
                      />
                      <div>
                        <label htmlFor="country">Country:
                          <span style={CreateBank.styles.required}> *</span>
                        </label>
                        <br />
                        <DropdownButton
                          title={this.state.bankCountry.name}
                          id="bankCountry"
                        >{this.countries}
                        </DropdownButton>
                      </div>
                      <br />
                      <Inputcard
                        {...CreateBank.PROPS.bankCity}
                        onInputChange={this.onInputChange}
                        value={this.state.bankCity}
                        validate={this.validate}
                      />
                      <Inputcard
                        {...CreateBank.PROPS.phone}
                        onInputChange={this.onInputChange}
                        value={this.state.phone}
                        validate={this.validate}
                      />
                      <Inputcard
                        {...CreateBank.PROPS.photoUrl}
                        onInputChange={this.onInputChange}
                        value={this.state.photoUrl}
                        validate={this.validate}
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
                        onChange={e => this.setState({ agreement: e.target.value })}
                      />
                    </div>
                    <div id="submitTransaction">
                      <button onClick={() => console.log('this.state: \n', this.state)}>
                        Submit
                      </button>
                    </div>
                  </well>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateBank;
