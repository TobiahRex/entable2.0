import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import authActions from '../../Redux/AuthRedux';

import loginStyles from './loginStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import LoginDetails from './loginDetails.login';
import LoginButton from './loginButton.login';

class Login extends React.Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
  }
  static breadCrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  }, {
    href: '/login',
    name: 'Login',
    active: true,
  }];
  static styles = loginStyles;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  onInputChange = (value, id) => this.setState({ [id]: value });

  validate = (id, vSuccess, vWarn, vError) => { //eslint-disable-line
    const length = this.state[id].length;
    if (length > vSuccess) return 'success';
    else if (length > vWarn) return 'warning';
    else if (length > vError) return 'error';
  }

  login = () => {
    const { username, password } = this.state;

    if (!username.length) {
      return this.setState({ error: 'Missing username!' });
    } else if (!password.length) {
      return this.setState({ error: 'Missing password' });
    }
    return this.props.loginUser({ username, password });
  }

  toggleHover = () => this.setState({ hover: !this.state.hover })

  render() {
    return (
      <div style={Login.styles.mainBgColor}>
        <Breadcrumbs paths={Login.breadCrumbs} />
        <h1 style={Login.styles.loginTitle}>Welcome Back!</h1>
        <div style={Login.styles.loginFlexParent}>
          <LoginDetails
            username={{
              value: this.state.username,
              onInputChange: this.onInputChange,
              validate: this.validate,
            }}
            password={{
              value: this.state.password,
              onInputChange: this.onInputChange,
              validate: this.validate,
            }}
          />
        </div>
        <LoginButton
          hover={this.state.hover}
          login={this.loginUser}
          toggleHover={this.toggleHover}
        />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loginUser: credentials => dispatch(authActions.loginUser(credentials)),
});
export default connect(null, mapDispatchToProps)(Login);
