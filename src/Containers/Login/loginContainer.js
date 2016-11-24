import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import authActions from '../../Redux/AuthRedux';

import loginStyles from './loginStyles';
import Breadcrumbs from '../../Components/Breadcrumb';

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

  onInputChange = (id, value) => this.setState({ [id]: value });

  validate = (id, vSuccess, vWarn, vError) => { //eslint-disable-line
    const length = this.state[id].length;
    if (length > vSuccess) return 'success';
    else if (length > vWarn) return 'warning';
    else if (length > vError) return 'error';
  }

  render() {
    return (
      <div style={Login.styles.mainBgColor}>
        <Breadcrumbs paths={Login.breadCrumbs} />
        <h1 style={Login.styles.loginTitle}>Welcome Back!</h1>
        <div>
          <LoginDetails
            onInputChange={this.onInputChange}
            validate={this.validate}

          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(authActions.loginUser(credentials)),
});
export default connect(null, mapDispatchToProps)(Login);
