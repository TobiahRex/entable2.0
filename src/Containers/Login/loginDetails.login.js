import React, { PropTypes } from 'react';
import styles from './loginStyles';
import InputCard from '../../Components/InputCard';

class loginDetails extends React.PureComponent {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    username: PropTypes.string,
    password: PropTypes.string,
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
        <h4 style={styles.loginH4}>Login Details</h4>
        <div style={styles.inputContainers}>
          <InputCard
            {...this.props.username}
            {...loginDetails.PROPS.username}
          />

        </div>
      </span>
    );
  }
}
export default loginDetails;
