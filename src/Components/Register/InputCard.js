import React, { PropTypes, PureComponent } from 'react';
import styles from '../../Containers/Register/registerStyles';

class InputCard extends PureComponent {

  render() {
    return (
      <div style={styles.userInfoInput}>
        <label htmlFor="firstName">First Name:
          <span style={styles.required}> *</span>
        </label>
        <input
          style={styles.userInfoInput}
          className="reg-form-control"
          type="text"
          id="firstName"
          value={this.props.firstName}
          onChange={e =>
            this.onInputChange(e.target.value, e.target.getAttribute('id'))}
        />
      </div>
    );
  }
};
InputCard.propTypes = {
  firstName: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

export default InputCard;
