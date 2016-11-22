import React, { PureComponent } from 'react';

class additionalDetails extends PureComponent {
  render() {
    return (
      <span>
        <h4 style={Register.styles.registerH4}>Additional Details</h4>
        <div style={Register.styles.additionalContainer}>
          <Inputcard
            {...Register.PROPS.phone}
            value={this.state.phone}
            onInputChange={this.onInputChange}
            validate={this.validate}
          />
          <br />
          <div style={Register.styles.userInfoInput}>
            <label htmlFor="role">Entable Role:
              <span style={Register.styles.required}> *</span>
            </label>
            <br />
            <DropdownButton title={this.state.role} id="role">
              <MenuItem
                eventKey="1"
                onClick={() => this.setState({ role: 'Donor' })}
              >Donor</MenuItem>
              <MenuItem
                eventKey="1"
                onClick={() => this.setState({ role: 'Bank Manager' })}
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
