import React, { PropTypes } from 'react';
import styles from './loginStyles';

class loginButton extends React.PureComponent {
  static propTypes = {
    hover: PropTypes.bool,
    toggleHover: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  toggleHover = () => this.props.toggleHover();

  login = () => this.props.login();

  render() {
    let loginBtnHover = {};
    if (this.props.hover) {
      loginBtnHover = {
        backgroundColor: '#fff',
        color: '#222',
      };
    } else {
      loginBtnHover = {
        backgroundColor: '#2ecc71',
        color: '#fff',
      };
    }

    return (
      <div style={styles.loginBtnContainer}>
        <div>
          <button
            style={{ ...styles.loginBtn, ...loginBtnHover }}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            onClick={this.login}
          >Login</button>
        </div>
      </div>
    );
  }
}
export default loginButton;
