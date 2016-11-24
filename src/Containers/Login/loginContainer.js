import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    render() {
      return (
        <div>
          <h1>Login Page</h1>
        </div>
      )
    }
  }
}
const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(authActions.loginUser(credentials)),
});
