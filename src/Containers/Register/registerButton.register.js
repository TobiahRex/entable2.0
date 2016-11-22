import React, { PropTypes, PureComponent } from 'react';
import styles from './registerStyles';

class registerButton extends PureComponent {
  static propTypes = {
    hover: PropTypes.bool,
    toggleHover: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
  }

  toggleHover = () => this.props.toggleHover();

  register = () => this.props.register();

  render() {
    let registerBtnHover = {};
    if (this.props.hover) {
      registerBtnHover = {
        backgroundColor: '#fff',
        color: '#222',
      };
    } else {
      registerBtnHover = {
        backgroundColor: '#2ecc71',
        color: '#fff',
      };
    }
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
