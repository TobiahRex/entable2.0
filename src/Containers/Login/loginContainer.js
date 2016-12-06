import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import authActions from '../../Redux/AuthRedux';

import loginStyles from './loginStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import LoginDetails from './loginDetails.login';
import LoginButton from './loginButton.login';

const ReactToast = require('react-toastr');

const ToastFactory = React.createFactory(ReactToast.ToastMessage.animation);
const { ToastContainer } = ReactToast;

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
    this.toasts = {
      loginFail: null,
    };
  }

  componentWillReceiveProps({ active, _id, api_error, error_msg }) {
    if (active) return browserHistory.push(`/donor/${_id}`);
    else if (error) return this.toasts.loginFail.error('Error: ', error.message);
    return 1;
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
          login={this.login}
          toggleHover={this.toggleHover}
        />
        <Footer />
        <ToastContainer
          ref={loginFail => (this.toasts.loginFail = loginFail)}
          toastMessageFactory={ToastFactory}
          className="toast-top-right"
        />
      </div>
    );
  }
}
const mapStateToProps = ({ user, api }) => ({
  active: user.active,
  _id: user._id,
  api_count: api.count,
  api_fetching: api.fetching,
  api_error: api.error,
  error_msg: user.error,
});
const mapDispatchToProps = dispatch => ({
  loginUser: credentials => dispatch(authActions.loginUser(credentials)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
