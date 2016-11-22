import React, { PropTypes, PureComponent } from 'react';
import { Checkbox } from 'react-bootstrap/lib/';
import styles from './registerStyles';

class privacyStatement extends PureComponent {
  render() {
    return (
      <span>
        <h4 style={styles.registerH4}>Privacy Statement</h4>
        <div style={{ ...styles.inputContainers, ...styles.registerPrivacyContainer }}>
          <div style={styles.registerPrivacyMsg}>
            <label htmlFor="privacyStatement">Please acknowledge that you accept our Privacy Statement by checking the following box.<br />The Privacy Statement can be read <a style={styles.privacyLink} href="/privacy">here</a>.<br />The Privacy statement will always be available from our website located in the webpage footer.
            </label>
            <Checkbox
              checked={this.state.agreed}
              onClick={() => this.setState({ agreed: true })}
            >I agree to the Privacy Statement:
              <span style={styles.required}> *</span>
            </Checkbox>
          </div>
        </div>
      </span>
    );
  }
}
export default privacyStatement;
