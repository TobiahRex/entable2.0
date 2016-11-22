import React, { PropTypes, PureComponent } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap/lib/';
import Inputcard from '../../Components/InputCard';
import styles from './registerStyles';

import Countries from '../../Services/CountryConstants';

class personalDetails extends PureComponent {
  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    postZip: PropTypes.string,
    country: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
  }
  static PROPS = {
    firstName: {
      id: 'firstName',
      type: 'text',
      name: 'First Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
    },
    lastName: {
      id: 'lastName',
      type: 'text',
      name: 'Last Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
    },
    email: {
      id: 'email',
      type: 'email',
      name: 'Email Address',
      required: true,
    },
    postZip: {
      id: 'postZip',
      type: 'text',
      name: 'Post / Zip Code',
      required: true,
      vSuccess: 4,
      vWarn: 1,
      vError: 0,
    },
  }
  constructor(props) {
    super(props);
    this.countries = Countries.map((country, i) => (
      <MenuItem
        key={`country${i}`}
        eventKey={i + 1}
        onClick={() =>
          this.props.onInputChange({
            name: country.name,
            code: country.code,
          }, 'country')
        }
      >{country.name} - ({country.code})
      </MenuItem>));
  }

  render() {
    return (
      <div>
        <h4 style={styles.registerH4}>Personal Details</h4>
        <div style={styles.inputContainers}>
          <Inputcard
            {...personalDetails.PROPS.firstName}
            onInputChange={this.props.onInputChange}
            value={this.props.firstName}
          />
          <br />
          <Inputcard
            {...personalDetails.PROPS.lastName}
            value={this.props.lastName}
            onInputChange={this.props.onInputChange}
            validate={this.props.validate}
          />
          <br />
          <Inputcard
            {...personalDetails.PROPS.email}
            value={this.props.email}
            onInputChange={this.props.onInputChange}
            validate={this.props.validate}
          />
          <br />
          <Inputcard
            {...personalDetails.PROPS.postZip}
            value={this.props.postZip}
            onInputChange={this.props.onInputChange}
            validate={this.props.validate}
          />
          <br />
          <div>
            <label htmlFor="country">Country:
              <span style={styles.required}> *</span>
            </label>
            <br />
            <DropdownButton title={this.props.country.name} id="country">
              {this.countries}
            </DropdownButton>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default personalDetails;
