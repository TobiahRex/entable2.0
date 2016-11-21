import React, { PropTypes, PureComponent } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap/lib/';
import styles from '../../Containers/Register/registerStyles';

class InputCard extends PureComponent {
  onInputChange = (value, id) => this.props.onInputChange(value, id);
  validateChange = () => {
    const length = this.props.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  };
  render() {
    return (
      <div style={styles.userInfoInput}>
        <FormGroup
          validationState={this.validateChange()}
        >
          <ControlLabel htmlFor={this.props.id}>{this.props.name}:
            {this.props.required ? <span style={styles.required}> *{this.props.requiredMsg}</span> : ''}
          </ControlLabel>

          <FormControl
            id={this.props.id}
            style={styles.userInfoInput}
            className="reg-form-control"
            type="text"
            value={this.props.value || ''}
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
          <FormControl.Feedback />
        </FormGroup>
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
  validate: PropTypes.func.isRequired,
};

export default InputCard;
