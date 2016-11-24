import React, { PropTypes } from 'react';
import styles from './loginStyles';

class loginButton extends React.PureComponent {
  static propTypes = {
    hover: PropTypes.bool,
    toggleHover: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }
}
export default loginButton;
