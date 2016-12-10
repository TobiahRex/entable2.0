import React, { Component, PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap/lib';
import Countries from '../Services/CountryConstants';
import styles from '../Containers/Manager/createBankPgStyles';


export default class CountryDropdown extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.countries = Countries.map((country, i) => (
      <MenuItem
        key={`country${i}`}
        eventKey={i + 1}
        onClick={() =>
          this.onInputChange({
            name: country.name,
            code: country.code,
          }, 'bankCountry')
        }
      >{country.name} - ({country.code})
      </MenuItem>));
  }

  render() {
    return (
      <div>
        <label htmlFor="country">
          Country:
          <span style={styles.required}> *</span>
        </label>
        <br />
        <DropdownButton
          title={this.props.title}
          id={this.props.id}
        >{this.countries}
        </DropdownButton>
      </div>
    );
  }
}
