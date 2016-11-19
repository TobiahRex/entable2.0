import React from 'react';
import Breadcrumbs from '../Components/Breadcrumb';

class Register extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
    };
    this.breadCrumbs = [{
      href: '/',
      name: 'Home',
      active: false,
    }, {
      href: '/register',
      name: 'Register',
      active: true,
    }];
    this.styles = {
      registerTitle: {
        padding: '0px 140px 0px 140px',
      },
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextState: ', nextState);
    return true;
  }

  onInputChange = (value, id) => this.setState({ [id]: value })

  render() {
    return (
      <div>
        <Breadcrumbs paths={this.breadCrumbs} />
        <h1 style={this.styles.registerTitle}>Register as a Donor</h1>
        <hr />
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={e =>
            this.onInputChange(e.target.value, e.target.getAttribute('id'))}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={e =>
            this.onInputChange(e.target.value, e.target.getAttribute('id'))}
        />
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="text"
          id="emailAddress"
          onChange={e =>
            this.onInputChange(e.target.value, e.target.getAttribute('id'))}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <div>
          <input
            type="text"
            id="dateOfBirth"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
        <label htmlFor="streetAddress">Street Address</label>
        <div>
          <input
            type="text"
            id="streetAddress"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
        <label htmlFor="addressLine2">Address Line 2</label>
        <div>
          <input
            type="text"
            id="addressLine2"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
        <label htmlFor="city">City</label>
        <div>
          <input
            type="text"
            id="city"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
        <label htmlFor="stateProvince">State / Province</label>
        <div>
          <input
            type="text"
            id="stateProvince"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
        <label htmlFor="postZipCode">Post / Zip Code</label>
        <div>
          <input
            type="text"
            id="postZipCode"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
        <label htmlFor="country">Country</label>
        <div>
          <input
            type="text"
            id="country"
            onChange={e =>
              this.onInputChange(e.target.value, e.target.getAttribute('id'))}
          />
        </div>
      </div>
    );
  }
}

export default Register;
