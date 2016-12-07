import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { CircularProgress } from 'material-ui';
import userActions from '../../Redux/AuthRedux';

import registerStyles from './registerStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import PersonalDetails from './personalDetails.register';
import AdditionalDetails from './additionalDetails.register';
import LoginDetails from './loginDetails.register';
import PrivacyStatement from './privacyStatement.register';
import RegisterButton from './registerButton.register';

class Register extends React.Component {
  static propTypes = {
    registerUser: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
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
      error: '',
    };
  }

  componentWillReceiveProps({ active, userRole, userId }) {
    if (active && userRole && userId) return browserHistory.push(`/${userRole}/${userId}`);
    return 1;
  }

  onInputChange = (value, id) => this.setState({ [id]: value })

  toggleHover = () => this.setState({ hover: !this.state.hover })

  validate = (id, vSuccess, vWarn, vError) => { //eslint-disable-line
    const inputs = ['firstName', 'lastName', 'postZip', 'country', 'phone', 'password'];
    if (inputs.includes(id)) {
      const length = this.state[id].length;
      if (length > vSuccess) return 'success';
      else if (length > vWarn) return 'warning';
      else if (length > vError) return 'error';
    } else if (id === 'email') {
      const match = this.state.email.match(/.+@.+\..+/i);
      if (match) return 'success';
      else if (this.state.email) return 'warning';
    } else if (id === 'confirmPassword') {
      const cPassword = this.state.confirmPassword;
      const password = this.state.password;
      if (cPassword === password && password.length > 1) return 'success';
      if (cPassword.length > 0) return 'warning';
      else if (cPassword > 0 && cPassword !== password) return 'error';
    }
  }

  register = () => {
    const state = Object.assign({}, this.state);
    delete state.error;
    delete state.hover;

    const missingFields = Object.keys(state).map((key) => {
      if (!state[key]) {
        return true;
      } else if ((state.role === 'Choose Role') || (state.country.name === 'Choose Country')) {
        return true;
      } else if (state.agreed === false) {
        return true;
      }
      return false;
    });

    if (missingFields.includes(true)) {
      this.setState({ error: 'Missing required field!' });
      // TODO make this some MUI toast or some sort of alert indicator.
    } else {
      state.phone = Number(state.phone);
      this.props.registerUser(state);
    }
  }

  render() {
    return (
      <div style={Register.styles.mainBgColor}>
        <Breadcrumbs paths={Register.breadCrumbs} />
        <h1 style={Register.styles.registerTitle}>
          Lets Get Started
        </h1>
        <div style={Register.styles.centerText}>
          <span style={Register.styles.required}>* <i>Required Information</i>
          </span>
        </div>
        <div style={Register.styles.registerFlexParent}>
          <PersonalDetails
            onInputChange={this.onInputChange}
            validate={this.validate}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            postZip={this.state.postZip}
            country={this.state.country}
          />
          <div className="registerGroup">
            <AdditionalDetails
              phone={this.state.phone}
              role={this.state.role}
              onInputChange={this.onInputChange}
              validate={this.validate}
            />
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
        <PrivacyStatement
          onInputChange={this.onInputChange}
          agreed={this.state.agreed}
        />
        <div>
          <RegisterButton
            hover={this.state.hover}
            register={this.register}
            toggleHover={this.toggleHover}
          />
          <CircularProgress />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  active: user.active,
  userRole: user.role,
  userId: user._id,
});
const mapDispatchToProps = dispatch => ({
  registerUser: details => dispatch(userActions.createUserFirebase(details)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
