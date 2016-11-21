import React from 'react';
import Inputcard from '../../Components/Register/InputCard';

class loginDetails extends React.PureComponent {
  render() {
    return (
      <span>

        <h4 style={Register.styles.registerH4}>Login Details</h4>
        <div style={Register.styles.inputContainers}>
          <Inputcard
            {...Register.PROPS.password}
            value={this.state.password}
            onInputChange={this.onInputChange}
            validate={this.validate}
          />
          <br />
          <Inputcard
            {...Register.PROPS.confirmPassword}
            value={this.state.confirmPassword}
            onInputChange={this.onInputChange}
            validate={this.validate}
          />
        </div>
      </span>
    )
  }
}
