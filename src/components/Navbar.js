import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import authActions from '../Redux/AuthRedux';

const ReactToast = require('react-toastr');

const ToastFactory = React.createFactory(ReactToast.ToastMessage.animation);
const { ToastContainer } = ReactToast;

class Navbar extends React.Component {
  static defaultProps = {
    active: false,
    role: 'donor',
    _id: null,
  }
  static propTypes = {
    active: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired,
    _id: PropTypes.string,
    children: PropTypes.node.isRequired,
    logoutUser: PropTypes.func.isRequired,
  };
  static styles = {
    navbarContainer: {
      position: 'fixed',
    },
    becomeDonor: {
      marginTop: 5,
      padding: 10,
      borderRadius: 5,
    },
  }
  constructor(props) {
    super(props);

    this.toasts = {
      logoutToast: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      active,
      // role,
      // _id,
      // api_count,
      // api_fetching,
      // api_error,
      user_error } = nextProps;

    if (this.props.active && !active) {
      return this.toasts.logoutToast.warning('You\'ve successfully logged out.  See you soon 😁', 'Logged Out ');
    } else if (user_error) return this.toasts.loginFail.error(user_error, 'ERROR 😳 ');
    return 1;
  }

  render() {
    const styles = {
      hide: {
        display: 'none',
      },
      show: {},
    };
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-default" style={Navbar.styles.navbarContainer}>
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <img
                  src="/assets/images/entable_logo_final_white.png"
                  height="20px"
                  role="presentation"
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li
                  style={this.props.active ? styles.hide : styles.show}
                  className="mainNavLink"
                >
                  <Link className="highlight1" style={Navbar.styles.becomeDonor} to="/register">
                    Become a Donor
                  </Link>
                </li>
                <li
                  className="mainNavLink"
                >
                  <Link to="/example">
                    Bank Example
                  </Link>
                </li>
                <li
                  style={this.props.active ? styles.hide : styles.show}
                  className="mainNavLink"
                >
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li
                  style={this.props.active ? styles.show : styles.hide}
                  className="mainNavLink"
                >
                  <button className="navbarButton" onClick={this.props.logoutUser}>
                    Log Out
                  </button>
                </li>
                <li
                  style={this.props.active ? styles.show : styles.hide}
                  className="mainNavLink"
                >
                  <Link to={`/${this.props.role}/${this.props._id}`}>
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <div>
          <ToastContainer
            ref={logoutToast => (this.toasts.logoutToast = logoutToast)}
            toastMessageFactory={ToastFactory}
            className="toast-top-right"
          />
          <ToastContainer
            ref={loginFail => (this.toasts.loginFail = loginFail)}
            toastMessageFactory={ToastFactory}
            className="toast-top-right"
          />
          <ToastContainer
            ref={ts => (this.toast.loginSuccess = ts)}
            toastMessageFactory={ToastFactory}
            className="toast-top-right"
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user, api }) => ({
  active: user.active,
  role: user.role,
  _id: user._id,
  api_count: api.count,
  api_fetching: api.fetching,
  api_error: api.error,
  user_error: user.error,
});
const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(authActions.logoutUser());
    browserHistory.push('/');
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
