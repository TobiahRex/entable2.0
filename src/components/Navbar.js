import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import authActions from '../Redux/AuthRedux';

class Navbar extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    logoutUser: PropTypes.func.isRequired,
  };
  static styles = {
    display: this.props.active ? 'hidden' : '',
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-default">
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
                  src="/entable_logo_final_white.png"
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
                <li className="mainNavLink">
                  <Link to="/example">
                    Bank Example
                  </Link>
                </li>
                <li className="mainNavLink">
                  <Link to="/register">
                    Become a Donor
                  </Link>
                </li>
                <li className="mainNavLink">
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li style={this.styles.display} className="mainNavLink">
                  <button className="navbarButton" onClick={this.props.logoutUser}>
                    Log Out
                  </button>
                </li>
                <li style={this.styles.display} className="mainNavLink">
                  <Link to="/account">
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  active: state.user.active,
});
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(authActions.logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
