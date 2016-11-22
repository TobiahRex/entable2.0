import React, { PropTypes, PureComponent } from 'react';
import styles from './registerStyles';

class registerButton extends PureComponent {
  render() {
    return (
      <div style={styles.registerBtnContainer}>
        <div>
          <button
            style={{ ...styles.registerBtn, ...registerBtnHover }}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            onClick={this.register}
          >Register</button>
        </div>
      </div>
    );
  }
}
export default registerButton;
