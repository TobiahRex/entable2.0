import React from 'react';
import { Checkbox } from 'react-bootstrap/lib/';
import Breadcrumbs from '../Components/Breadcrumb';
import Footer from '../Components/Footer';

class Register extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      agreed: false,
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
      registerFlexParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      registerTitle: {
        padding: '0px 140px 0px 140px',
      },
      registerH4: {
        textAlign: 'center',
      },
      registerPrivacy: {
        display: 'flex',
        flexDirection: 'column',
      },
      registerPrivacyContainer: {
        alignSelf: 'center',
      },
      registerPrivacyMsg: {
        width: '80%',
        margin: '0px 100px',
      },
      inputContainers: {
        padding: '25px 140px 50px 140px',
      },
      userInfoDiv: {
        width: '270px',
      },
      userInfoInput: {
        width: '250px',
      },
      required: {
        color: 'red',
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
        <div style={this.styles.registerFlexParent}>
          <div>
            <h4 style={this.styles.registerH4}>Personal Details</h4>
            <div style={this.styles.inputContainers}>
              <div style={this.styles.userInfoInput}>
                <label htmlFor="firstName">First Name:
                  <span style={this.styles.required}> *</span>
                </label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
                  type="text"
                  id="firstName"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
              <br />
              <div style={this.styles.userInfoInput}>
                <label htmlFor="lastName">Last Name:
                  <span style={this.styles.required}> *</span>
                </label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
                  type="text"
                  id="lastName"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
              <br />
              <div style={this.styles.userInfoInput}>
                <label htmlFor="emailAddress">Email Address:
                  <span style={this.styles.required}> *</span>
                </label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
                  type="text"
                  id="emailAddress"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
              <br />
              <div style={this.styles.userInfoInput}>
                <label htmlFor="postZipCode">Post / Zip Code:
                  <span style={this.styles.required}> *</span>
                </label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
                  type="text"
                  id="postZipCode"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
              <br />
              <div style={this.styles.userInfoInput}>
                <label htmlFor="country">Country:
                  <span style={this.styles.required}> *</span>
                </label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
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
            <h4 style={this.styles.registerH4}>Additional Details</h4>
            <div style={this.styles.inputContainers}>
              <div style={this.styles.userInfoInput}>
                <label htmlFor="phoneNumber">Phone Number:
                  <span style={this.styles.required}> *</span></label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
                  type="text"
                  id="phoneNumber"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
            </div>
            <br />
            <h4 style={this.styles.registerH4}>Login Details</h4>
            <div style={this.styles.inputContainers}>
              <div style={this.styles.userInfoInput}>
                <label htmlFor="password">Password:
                  <span style={this.styles.required}> * <i>At least 8 characters.</i></span>
                </label>
                <input
                  style={this.styles.userInfoInput}
                  className="reg-form-control"
                  type="text"
                  id="password"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
              <br />
              <div style={this.styles.userInfoInput}>
                <label htmlFor="confirmPassword">Confirm Password:
                  <span style={this.styles.required}> *</span>
                </label>
                <input
                  style={this.styles.userInfoInput}

                  className="reg-form-control"
                  type="text"
                  id="confirmPassword"
                  onChange={e =>
                    this.onInputChange(e.target.value, e.target.getAttribute('id'))}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={this.styles.registerPrivacy}>
          <h4 style={this.styles.registerH4}>Privacy Statement</h4>
          <div style={{ ...this.styles.inputContainers, ...this.styles.registerPrivacyContainer }}>
            <div style={this.styles.registerPrivacyMsg}>
              <label htmlFor="privacyStatement">Please acknowledge that you accept our Privacy Statement by checking the following box.  The Privacy Statement can be read <a href="/privacy">here</a>.  The Privacy statement will always be available from our website located in the webpage footer. </label>
              <Checkbox checked={this.state.agreed} >
                I agree to the Privacy Statement:
                <span style={this.styles.required}> *</span>
              </Checkbox>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;
