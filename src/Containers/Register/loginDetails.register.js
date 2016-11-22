import React, { PropTypes } from 'react';
import Inputcard from '../../Components/InputCard';
import styles from './registerStyles';

class loginDetails extends React.PureComponent {
  static propTypes = {
    password: PropTypes.objectOf(PropTypes.any.isRequired),
    confirmPassword: PropTypes.objectOf(PropTypes.any.isRequired),
  }
  static PROPS = {
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
    confirmPassword: {
      id: 'confirmPassword',
      type: 'password',
      name: 'Confirm Password',
      required: true,
    },
  }
  render() {
    return (
      <span>
        <h4 style={styles.registerH4}>Login Details</h4>
        <div style={styles.inputContainers}>
          <Inputcard {...this.props.password} {...loginDetails.PROPS.password} />
          <br />
          <Inputcard {...this.props.confirmPassword} {...loginDetails.PROPS.confirmPassword} />
        </div>
      </span>
    );
  }
}
export default loginDetails;
