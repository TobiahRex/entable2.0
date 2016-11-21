import React, { PropTypes } from 'react';
import Inputcard from '../../Components/InputCard';
import styles from './registerStyles';

class loginDetails extends React.PureComponent {
  static propTypes = {
    password: PropTypes.objectOf(PropTypes.any.isRequired),
    confirmPassword: PropTypes.objectOf(PropTypes.any.isRequired),
  }
  render() {
    console.log('this.props: ', this.props);
    return (
      <span>
        <h4 style={styles.registerH4}>Login Details</h4>
        <div style={styles.inputContainers}>
          <Inputcard {...this.props.password} />
          <br />
          <Inputcard {...this.props.confirmPassword} />
        </div>
      </span>
    );
  }
}
export default loginDetails;
// Object
// id: "firstName"
// name: "First Name"
// onInputChange: (value, id)
// required: true
// type: "text"
// vError: 2
// vSuccess: 1
// vWarn: 1
// validate: (id, vSuccess, vWarn, vError)
// value: ""
