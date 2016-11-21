import React, { PropTypes } from 'react';
import Inputcard from '../../Components/InputCard';
import styles from './registerStyles';

class loginDetails extends React.PureComponent {
  static propTypes = {
    // password: PropTypes.objectOf(PropTypes.node),
    // confirmPassword: PropTypes.objectOf(PropTypes.node),
  }
  render() {
    console.log('this.props: ', this.props);
    return (
      <span>
        <h4 style={styles.registerH4}>Login Details</h4>
        <div style={styles.inputContainers}>
          <Inputcard
            {...this.props.password}
            value={this.state.password}
            onInputChange={this.onInputChange}
            validate={this.validate}
          />
          <br />
          <Inputcard
            {...this.props.confirmPassword}
            value={this.state.confirmPassword}
            onInputChange={this.onInputChange}
            validate={this.validate}
          />
        </div>
      </span>
    );
  }
}
export default loginDetails;
