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
        <div className="registerFlexParent">
          <div className="registerGroup">
            <h4>Personal Details</h4>
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
              <br />
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
              <br />
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
              <br />
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
              <br />
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
              <br />
            </div>
          </div>
          <div className="registerGroup">
            <h4>Additional Details</h4>
            <div style={this.styles.inputContainers}>
              <div style={this.styles.userInfoInput}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  style={this.styles.userInfoInput}e={this.styles.userInfoInput}
                  type="text"
                  id="phoneNumber"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
            </div>
            <br />
            <h4>Login Details</h4>
            <div style={this.styles.inputContainers}>
              <div style={this.styles.userInfoInput}>
                <label htmlFor="password">Password</label>
                <input
                  style={this.styles.userInfoInput}e={this.styles.userInfoInput}
                  type="text"
                  id="password"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
              <div style={this.styles.userInfoInput}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  style={this.styles.userInfoInput}e={this.styles.userInfoInput}
                  type="text"
                  id="confirmPassword"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="registerPrivacy">
          <h4>Privacy Statement</h4>
          <div style={this.styles.inputContainers}>
            <div style={this.styles.userInfoInput}>
              <label htmlFor="privacyStatement">Please acknowledge that you accept our Privacy Statement by checking the following box.  The Privacy Statement can be read <a href="/privacy">here</a>.  The Privacy statement will always be available from our website located in the webpage footer. </label>
              <input
                style={this.styles.userInfoInput}e={this.styles.userInfoInput}
                type="text"
                id="privacyStatement"
                onChange={e =>
                  this.onInputChange(e.target.value, e.target.getAttribute('id'))}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;
