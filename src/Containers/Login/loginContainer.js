import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import authActions from '../../Redux/AuthRedux';

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
