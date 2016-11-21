import React, { PropTypes, PureComponent } from 'react';
import styles from '../../Containers/Register/registerStyles';

class InputCard extends PureComponent {
  onInputChange = (value, id) => this.props.onInputChange(value, id);
  render() {
    return (
      <div style={styles.userInfoInput}>

        <label htmlFor={this.props.id}>{this.props.name}:
          {this.props.required ? <span style={styles.required}> *{this.props.requiredMsg}</span> : ''}
        </label>

        <input
          id={this.props.id}
          style={styles.userInfoInput}
          className="reg-form-control"
          type="text"
          value={this.props.value || ''}
          onChange={e =>
            this.onInputChange(e.target.value, e.target.getAttribute('id'))}
        />
      </div>
    );
  }
}
InputCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  requiredMsg: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

export default InputCard;
