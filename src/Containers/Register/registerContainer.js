import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap/lib/';
import userActions from '../../Redux/UserRedux';

import registerStyles from './registerStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import Inputcard from '../../Components/InputCard';
// import Countries from '../../Services/CountryConstants';
import LoginDetails from './loginDetails.register';

class Register extends React.Component {
  static breadCrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  }, {
    href: '/register',
    name: 'Register',
    active: true,
  }];
  static styles = registerStyles;
  static PROPS = {
    phone: {
      id: 'phone',
      name: 'Phone Number',
      required: true,
      requiredMsg: ' 123-456-7890',
      vSuccess: 11,
      vWarning: 10,
      vError: 1,
    },
  };
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      postZip: '',
      country: {
        name: 'Choose Country',
        code: '',
      },
      phone: '',
      role: 'Choose Role',
      password: '',
      confirmPassword: '',
      agreed: false,
      hover: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('state: ', nextState);
  }

  onInputChange = (value, id) => this.setState({ [id]: value })

  toggleHover = () => this.setState({ hover: !this.state.hover })

  validate = (id, vSuccess, vWarn, vError) => { //eslint-disable-line
    switch (id) {
      case 'firstName': {
        const length = this.state[id].length;
        if (length > vSuccess) return 'success';
        else if (length > vWarn) return 'warning';
        else if (length > vError) return 'error';
      } break;
      case 'lastName': {
        const length = this.state[id].length;
        if (length > vSuccess) return 'success';
        else if (length > vWarn) return 'warning';
        else if (length > vError) return 'error';
      } break;
      case 'email': {
        const match = this.state.email.match(/.+@.+\..+/i);
        if (match) return 'success';
        else if (this.state.email) return 'warning';
      } break;
      case 'postZip': {
        const length = this.state[id].length;
        if (length > vSuccess) return 'success';
        else if (length > vWarn) return 'warning';
        else if (length > vError) return 'error';
      } break;
      case 'country': {
        const length = this.state[id].length;
        if (length > vSuccess) return 'success';
        else if (length > vWarn) return 'warning';
        else if (length > vError) return 'error';
      } break;
      case 'phone': {
        const length = this.state[id].length;
        if (length > vSuccess) return 'success';
        else if (length > vWarn) return 'warning';
        else if (length > vError) return 'error';
      } break;
      case 'password': {
        const length = this.state[id].length;
        if (length > vSuccess) return 'success';
        if (length > vWarn) return 'warning';
        else if (length > vError) return 'error';
      } break;
      case 'confirmPassword': {
        const cPassword = this.state.confirmPassword;
        const password = this.state.password;
        if (cPassword === password && password.length > 1) return 'success';
        if (cPassword.length > 0) return 'warning';
        else if (cPassword > 0 && cPassword !== password) return 'error';
      } break;
      default: break;
    }
  }

  register = () => {
    const state = Object.assign({}, this.state);
    delete state.hover;
    this.props.registerUser(state);
  }

  render() {
    let registerBtnHover = {};
    if (this.state.hover) {
      registerBtnHover = {
        backgroundColor: '#fff',
        color: '#222',
      };
    } else {
      registerBtnHover = {
        backgroundColor: '#2ecc71',
        color: '#fff',
      };
    }
    return (
      <div style={Register.styles.mainBgColor}>
        <Breadcrumbs paths={Register.breadCrumbs} />
        <h1 style={Register.styles.registerTitle}>Lets Get Started</h1>
        <hr />
        <div style={Register.styles.centerText}>
          <span style={Register.styles.required}>* <i>Required Information</i>
          </span>
        </div>
        <div style={Register.styles.registerFlexParent}>
          <PersonalDetails
            onInputChange={this.onInputChange}
            validate={this.validate}
            firstName={this.state.firstName}
            lastName={this.state.lastname}
            email={this.state.email}
            postZip={this.state.postZip}            country={this.state.country.name}
          />
          {/* <div>
            <h4 style={Register.styles.registerH4}>Personal Details</h4>
            <div style={Register.styles.inputContainers}>
            <Inputcard
            {...Register.PROPS.firstName}
            value={this.state.firstName}
            onInputChange={this.onInputChange}
            validate={this.validate}
            />
            <br />
            <Inputcard
            {...Register.PROPS.lastName}
            value={this.state.lastName}
            onInputChange={this.onInputChange}
            validate={this.validate}
            />
            <br />
            <Inputcard
            {...Register.PROPS.email}
            value={this.state.email}
            onInputChange={this.onInputChange}
            validate={this.validate}
            />
            <br />
            <Inputcard
            {...Register.PROPS.postZip}
            value={this.state.postZip}
            onInputChange={this.onInputChange}
            validate={this.validate}
            />
            <br />
            <div>
            <label htmlFor="country">Country:
            <span style={Register.styles.required}> *</span>
            </label>
            <br />
            <DropdownButton title={this.state.country.name} id="country">
            {this.countries}
            </DropdownButton>
            </div>
            <br />
            </div>
          </div> */}
          <div className="registerGroup">
            <h4 style={Register.styles.registerH4}>Additional Details</h4>
            <div style={Register.styles.additionalContainer}>
              <Inputcard
                {...Register.PROPS.phone}
                value={this.state.phone}
                onInputChange={this.onInputChange}
                validate={this.validate}
              />
              <br />
              <div style={Register.styles.userInfoInput}>
                <label htmlFor="role">Entable Role:
                  <span style={Register.styles.required}> *</span>
                </label>
                <br />
                <DropdownButton title={this.state.role} id="role">
                  <MenuItem
                    eventKey="1"
                    onClick={() => this.setState({ role: 'Donor' })}
                  >Donor</MenuItem>
                  <MenuItem
                    eventKey="1"
                    onClick={() => this.setState({ role: 'Bank Manager' })}
                  >Bank Manager</MenuItem>
                </DropdownButton>
                <br />
              </div>
            </div>
            <br />
            <LoginDetails
              password={{
                value: this.state.password,
                onInputChange: this.onInputChange,
                validate: this.validate,
              }}
              confirmPassword={{
                value: this.state.confirmPassword,
                onInputChange: this.onInputChange,
                validate: this.validate,
              }}
            />
          </div>
        </div>
        <div style={Register.styles.registerPrivacy}>
          <h4 style={Register.styles.registerH4}>Privacy Statement</h4>
          <div style={{ ...Register.styles.inputContainers, ...Register.styles.registerPrivacyContainer }}>
            <div style={Register.styles.registerPrivacyMsg}>
              <label htmlFor="privacyStatement">Please acknowledge that you accept our Privacy Statement by checking the following box.<br />The Privacy Statement can be read <a style={Register.styles.privacyLink} href="/privacy">here</a>.<br />The Privacy statement will always be available from our website located in the webpage footer.
              </label>
              <Checkbox
                checked={this.state.agreed}
                onClick={() => this.setState({ agreed: true })}
              >I agree to the Privacy Statement:
                <span style={Register.styles.required}> *</span>
              </Checkbox>
            </div>
          </div>
        </div>
        <div style={Register.styles.registerBtnContainer}>
          <div>
            <button
              style={{ ...Register.styles.registerBtn, ...registerBtnHover }}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
              onClick={this.register}
            >
            Register</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  registerUser: details => dispatch(userActions.registerUser(details)),
});
export default connect(null, mapDispatchToProps)(Register);
