import React, { PropTypes, PureComponent } from 'react';
import styles from '../../Containers/Register/registerStyles';

class InputCard extends PureComponent {
  render() {
    return (
      <div style={styles.userInfoInput}>
        <label htmlFor={this.props.id}>{this.props.name}:
          {this.props.required ? <span style={styles.required}> *</span> : ''}
        </label>
        <input
          style={styles.userInfoInput}
          className="reg-form-control"
          type="text"
          id={this.props.id}
          value={this.props.value}
          onChange={e =>
            this.props.onInputChange(e.target.value, e.target.getAttribute('id'))}
        />
      </div>
    );
  }
}
InputCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

export default InputCard;
