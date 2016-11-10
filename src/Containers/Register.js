import React from 'react';

class Register extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <div>
        <h1>Register as a Donor</h1>
      </div>
    );
  }
}

export default Register;
