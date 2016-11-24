import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import authActions from '../../Redux/AuthRedux';
import loginStyles from './loginStyles';

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
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

  render() {
    return (
      <div>
        <h1>Login Page</h1>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(authActions.loginUser(credentials)),
});
export default connect(null, mapDispatchToProps)(Login);
