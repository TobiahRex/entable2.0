import React, { PropTypes, PureComponent } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap/lib/';
import Inputcard from '../../Components/InputCard';
import styles from './registerStyles';

class additionalDetails extends PureComponent {
  static propTypes = {
    phone: PropTypes.string,
    role: PropTypes.string,
    validate: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
  }
  static PROPS = {
    phone: {
      id: 'phone',
      name: 'Phone Number',
      required: true,
      requiredMsg: ' 1234567890',
      vSuccess: 9,
      vWarning: 8,
      vError: 1,
    },
  };

  onInputChange = (value, id) => this.props.onInputChange(value, id);

  render() {
    return (
      <span>
        <h4 style={styles.registerH4}>Additional Details</h4>
        <div style={styles.additionalContainer}>
          <Inputcard
            {...additionalDetails.PROPS.phone}
            value={this.props.phone}
            onInputChange={this.props.onInputChange}
            validate={this.props.validate}
          />
          <br />
          <div style={styles.userInfoInput}>
            <label htmlFor="role">Entable Role:
              <span style={styles.required}> *</span>
            </label>
            <br />
            <DropdownButton title={this.props.role} id="role">
              <MenuItem
                eventKey="1"
                onClick={() => this.onInputChange('donor', 'role')}
              >Donor</MenuItem>
              <MenuItem
                eventKey="2"
                onClick={() => this.onInputChange('manager', 'role')}
              >Bank Manager</MenuItem>
            </DropdownButton>
            <br />
          </div>
        </div>
      </span>
    );
  }
}
export default additionalDetails;
