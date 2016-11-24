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
