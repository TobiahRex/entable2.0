import React from 'react';
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap/lib/';
import registerStyles from './registerStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import Inputcard from '../../Components/InputCard';
import Countries from '../../Services/CountryConstants';
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
    firstName: {
      id: 'firstName',
      type: 'text',
      name: 'First Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
    },
    lastName: {
      id: 'lastName',
      type: 'text',
      name: 'Last Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
    },
    email: {
      id: 'email',
      type: 'email',
      name: 'Email Address',
      required: true,
    },
    postZip: {
      id: 'postZip',
      type: 'text',
      name: 'Post / Zip Code',
      required: true,
      vSuccess: 4,
      vWarn: 1,
      vError: 0,
    },
    phone: {
      id: 'phone',
      name: 'Phone Number',
      required: true,
      requiredMsg: ' 123-456-7890',
      vSuccess: 11,
      vWarning: 10,
      vError: 1,
    },
    password: {
      id: 'password',
      type: 'password',
      name: 'Password',
      required: true,
      requiredMsg: ' At least 8 characters',
      vSuccess: 7,
      vWarning: 2,
      vError: 1,
    },
    confirmPassword: {
      id: 'confirmPassword',
      type: 'password',
      name: 'Confirm Password',
      required: true,
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
    };
    this.countries = Countries.map((country, i) => (
      <MenuItem
        key={`country${i}`}
        eventKey={i + 1}
        onClick={() => this.setState({ country })}
      >
        {country.name} - ({country.code})
      </MenuItem>
    ));
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('state: ', nextState);
  }

  onInputChange = (value, id) => this.setState({ [id]: value })

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

  render() {
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
          <div>
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
          </div>
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
              password={{ ...Register.PROPS.password,
                value: this.state.password,
                onInputChange: this.onInputChange,
                validate: this.validate,
              }}
              confirmPassword={{ ...Register.PROPS.confirmPassword,
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
        <Footer />
      </div>
    );
  }
}
export default Register;
