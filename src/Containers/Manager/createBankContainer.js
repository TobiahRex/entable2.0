import React, { PropTypes } from 'react';
import moment from 'moment';
import { Collapse } from 'react-bootstrap/lib';
import Breadcrumbs from '../../Components/Breadcrumb';
import createBankPgStyles from './createBankPgStyles';
import Inputcard from '../../Components/InputCard';
// import Countries from '../../Services/CountryConstants';
import CountryDropdown from '../../Components/CountryDropdown';
import CreateBankDesc from './createBank.description';

class CreateBank extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
      createBnkHover: false,
      submitBnkHover: false,
    };
  }

  onInputChange = (value, id) =>
  this.setState({ [id]: value });

  toggleDropdown = () =>
  this.setState(({ dropDownOpen: !this.state.dropDownOpen }));

  validate = (id, vSuccess, vWarn, vError) => { //eslint-disable-line
    const inputs = ['bankName', 'bankCity', 'bankCountry', 'phone', 'photoUrl'];
    if (inputs.includes(id)) {
      const length = this.state[id].length;
      if (length > vSuccess) return 'success';
      else if (length > vWarn) return 'warning';
      else if (length > vError) return 'error';
    }
  }

  toggleHover = id => this.setState(({ [id]: !this.state[id] }));

  render() {
    let createBnkHoverStyle = {};
    let submitBnkHoverStyle = {};
    if (this.state.createBnkHover) {
      createBnkHoverStyle = {
        backgroundColor: '#fff',
        color: '#222',
      };
    } else {
      createBnkHoverStyle = {
        backgroundColor: '#2ecc71',
        color: '#fff',
      };
    }

    if (this.state.submitBnkHover) {
      submitBnkHoverStyle = {
        backgroundColor: '#fff',
        color: '#222',
      };
    } else {
      submitBnkHoverStyle = {
        backgroundColor: '#2ecc71',
        color: '#fff',
      };
    }
    console.log('this.state.dropDownOpen: ', this.state.dropDownOpen);
    return (
      <div>
        <Breadcrumbs paths={CreateBank.breadcrumbs} />
        <div style={CreateBank.styles.mainContainer}>
          <CreateBankDesc />
          <div id="welcomeBalances">
            <div id="createBankContainer">
              <div style={CreateBank.styles.createBnkBtnContainer}>
                <button
                  id="createBnkHover"
                  style={{ ...createBnkHoverStyle, ...CreateBank.styles.createBnkBtn }}
                  onMouseEnter={e => this.toggleHover(e.target.getAttribute('id'))}
                  onMouseLeave={e => this.toggleHover(e.target.getAttribute('id'))}
                  onClick={this.toggleDropdown}
                > {this.state.dropDownOpen ? 'Cancel' : 'Create Bank'}
                </button>
              </div>
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
                      <CountryDropdown
                        id={this.props.id}
                        title={this.props.title}
                      />
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
                      <div>
                        <label htmlFor="transLegal">
                          Legal Agreement:
                          <span style={CreateBank.styles.required}> *</span>
                        </label>
                        <input
                          id="transLegal"
                          type="checkbox"
                          value={this.state.agreement}
                          onChange={e => this.setState({ agreement: e.target.value })}
                        />
                      </div>
                    </div>
                    <div style={CreateBank.styles.submitBtnContainer}>
                      <button
                        id="submitBnkHover"
                        style={{ ...CreateBank.styles.submitBtn, ...submitBnkHoverStyle }}
                        onMouseEnter={e => this.toggleHover(e.target.getAttribute('id'))}
                        onMouseLeave={e => this.toggleHover(e.target.getAttribute('id'))}
                        onClick={() => console.log('this.state: \n', this.state)}
                      >Submit</button>
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
