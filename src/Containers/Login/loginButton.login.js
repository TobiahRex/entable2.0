import React, { PropTypes } from 'react';
import styles from './loginStyles';

class loginButton extends React.PureComponent {
  static propTypes = {
    hover: PropTypes.bool,
    toggleHover: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  toggleHover = () => this.prpos.toggleHover();

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
        backgroundColor: '#2eec71',
        color: '#fff',
      };
    }

    return (
      <div style={styles.loginBtnContainer}>
        <div>
          <button>
            style={{ ...styles.loginBtn, ...loginBtnHover }}
          </button>
        </div>
      </div>
    )
  }
}
export default loginButton;
