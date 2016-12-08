import React, { PropTypes, PureComponent } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap/lib/';
import registerStyles from '../Containers/Register/registerStyles';
import createBankStyles from '../Containers/Manager/createBankPgStyles';
import loginStyles from '../Containers/Login/loginStyles';

class InputCard extends PureComponent {
  onInputChange = (value, id) => this.props.onInputChange(value, id)

  validateChange = () =>
  this.props.validate(this.props.id, this.props.vSuccess, this.props.vWarn, this.props.vError)

  render() {
    let styles;
    const pathName = window.location.pathname.split('/')[1];
    console.log('pathName: ', pathName);
    if (pathName === 'register') {
      styles = registerStyles;
    } else if (pathName === 'manager') {
      styles = createBankStyles;
    } else if (pathName === 'login') {
      styles = loginStyles;
    }
    console.log('styles: ', styles);

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
            type={this.props.type}
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
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  requiredMsg: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  vSuccess: PropTypes.number,
  vWarn: PropTypes.number,
  vError: PropTypes.number,
};

export default InputCard;
