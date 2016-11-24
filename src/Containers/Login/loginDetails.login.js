import React, { PropTypes } from 'react';
import styles from './loginStyles';
import InputCard from '../../Components/InputCard';

class loginDetails extends React.PureComponent {
  static propTypes = {
    username: PropTypes.objectOf(PropTypes.any.isRequired),
    password: PropTypes.objectOf(PropTypes.any.isRequired),
  }
  static PROPS = {
    username: {
      id: 'username',
      type: 'email',
      name: 'Username / Email',
      required: true,
      vSuccess: 3,
      vWarn: 0,
      vError: 1,
    },
    password: {
      id: 'password',
      type: 'password',
      name: 'Password',
      required: true,
      requiredMsg: ' At least 8 characters',
      vSuccess: 7,
      vWarning: 2,
      vError: 1,
    },
  }
  render() {
    return (
      <span>
        <h4 style={styles.loginH4}>Login</h4>
        <div style={styles.loginContainer}>
          <InputCard
            {...this.props.username}
            {...loginDetails.PROPS.username}
          />
          <br />
          <InputCard
            {...this.props.password}
            {...loginDetails.PROPS.password}
          />
        </div>
      </span>
    );
  }
}
export default loginDetails;
