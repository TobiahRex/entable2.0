import React from 'react';
import Breadcrumbs from '../Components/Breadcrumb';
import Footer from '../Components/Footer';

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
      inputContainers: {
        padding: '25px 140px 50px 140px',
      },
      userInfoDiv: {
        width: '270px',
      },
      userInfoInput: {
        width: '250px',
      }
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
        <div style={this.styles.inputContainers}>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="firstName">First Name</label>
            <input
              style={this.styles.userInfoInput}e={this.styles.userInfoInput}
              type="text"
              id="firstName"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="lastName">Last Name</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="lastName"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="emailAddress"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="dateOfBirth"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="streetAddress"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="addressLine2"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="city">City</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="city"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <label htmlFor="stateProvince">State / Province</label>
          <div style={this.styles.userInfoInput}          >
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="stateProvince"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
            <label htmlFor="postZipCode">Post / Zip Code</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="postZipCode"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
          <div style={this.styles.userInfoInput}>
          <label htmlFor="country">Country</label>
            <input
              style={this.styles.userInfoInput}
              type="text"
              id="country"
              onChange={e =>
                this.onInputChange(e.target.value, e.target.getAttribute('id'))}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;
