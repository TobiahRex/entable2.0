import React from 'react';
import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap/lib/';
import registerStyles from './registerStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import Inputcard from '../../Components/Register/InputCard';
import Countries from '../../Services/CountryConstants';
import States from '../../Services/StatesConstants';

class Register extends React.Component {
  static propTypes = {

  }
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
    this.breadCrumbs = [{
      href: '/',
      name: 'Home',
      active: false,
    }, {
      href: '/register',
      name: 'Register',
      active: true,
    }];
    this.PROPS = {
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
        value: this.state.password,
        onInputChange: this.onInputChange,
        validate: this.validate,
        vSuccess: 7,
        vWarning: 2,
        vError: 1,
      },
      confirmPassword: {
        id: 'confirmPassword',
        type: 'password',
        name: 'Confirm Password',
        required: true,
        value: this.state.confirmPassword,
        onInputChange: this.onInputChange,
        validate: this.validate,
      },
    }
    this.countries = Countries.map((country, i) => (
      <MenuItem
        key={`country${i}`}
        eventKey={i + 1}
        onClick={() => this.setState({ country })}
      >
        {country.name} - ({country.code})
      </MenuItem>
    ));
    this.styles = registerStyles;
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
      <div style={this.styles.mainBgColor}>
        <Breadcrumbs paths={this.breadCrumbs} />
        <h1 style={this.styles.registerTitle}>Lets Get Started</h1>
        <hr />
        <div style={this.styles.centerText}>
          <span style={this.styles.required}>* <i>Required Information</i>
          </span>
        </div>
        <div style={this.styles.registerFlexParent}>
          <div>
            <h4 style={this.styles.registerH4}>Personal Details</h4>
            <div style={this.styles.inputContainers}>
              <Inputcard
                {...this.PROPS.firstName}
                value={this.state.firstName}
                onInputChange={this.onInputChange}
                validate={this.validate}
              />
              <br />
              <Inputcard
                {...this.PROPS.lastName}
                value={this.state.lastName}
                onInputChange={this.onInputChange}
                validate={this.validate}
              />
              <br />
              <Inputcard
                {...this.PROPS.email}
                value={this.state.email}
                onInputChange={this.onInputChange}
                validate={this.validate}
              />
              <br />
              <Inputcard
                {...this.PROPS.postZip}
                value={this.state.postZip}
                onInputChange={this.onInputChange}
                validate={this.validate}
              />
              <br />
              <div>
                <label htmlFor="country">Country:
                  <span style={this.styles.required}> *</span>
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
            <h4 style={this.styles.registerH4}>Additional Details</h4>
            <div style={this.styles.additionalContainer}>
              <Inputcard
                {...this.PROPS.phone}
                value={this.state.phone}
                onInputChange={this.onInputChange}
                validate={this.validate}
              />
              <br />
              <div style={this.styles.userInfoInput}>
                <label htmlFor="role">Entable Role:
                  <span style={this.styles.required}> *</span>
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
            <h4 style={this.styles.registerH4}>Login Details</h4>
            <div style={this.styles.inputContainers}>
              <Inputcard {...this.PROPS.password} />
              <br />
              <Inputcard {...this.PROPS.confirmPassword} />
            </div>
          </div>
        </div>
        <div style={this.styles.registerPrivacy}>
          <h4 style={this.styles.registerH4}>Privacy Statement</h4>
          <div style={{ ...this.styles.inputContainers, ...this.styles.registerPrivacyContainer }}>
            <div style={this.styles.registerPrivacyMsg}>
              <label htmlFor="privacyStatement">Please acknowledge that you accept our Privacy Statement by checking the following box.<br />The Privacy Statement can be read <a style={this.styles.privacyLink} href="/privacy">here</a>.<br />The Privacy statement will always be available from our website located in the webpage footer.
              </label>
              <Checkbox
                checked={this.state.agreed}
                onClick={() => this.setState({ agreed: true })}
              >I agree to the Privacy Statement:
                <span style={this.styles.required}> *</span>
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
