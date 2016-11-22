import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap/lib/';
import userActions from '../../Redux/UserRedux';

import registerStyles from './registerStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import Inputcard from '../../Components/InputCard';
import PersonalDetails from './personalDetails.register';
import LoginDetails from './loginDetails.register';
import PrivacyStatement from './privacyStatement.register';
import RegisterButton from './registerButton.register';

class Register extends React.Component {
  static propTypes = {
    registerUser: PropTypes.func.isRequired,
  }
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
            postZip={this.state.postZip}
            country={this.state.country}
          />
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
          <PrivacyStatement
            onInputChange={this.onInputChange}
            agreed={this.state.agreed}
          />
        </div>
        <RegisterButton
          hover={this.state.hover}
          register={this.register}
          toggleHover={this.toggleHover}
        />
        {/* <div style={Register.styles.registerBtnContainer}>
          <div>
          <button
          style={{ ...Register.styles.registerBtn, ...registerBtnHover }}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={this.register}
          >Register</button>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  registerUser: details => dispatch(userActions.registerUser(details)),
});
export default connect(null, mapDispatchToProps)(Register);
