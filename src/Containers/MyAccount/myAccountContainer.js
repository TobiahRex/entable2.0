import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import donorActions from '../../Redux/DonorRedux';

/* TODO:
  1. Build out the donor reducer.
  2. BUild out the saga for getting the donotions.
  3. Build out the Dashboard for the My Account UI.
*/

class myAccount extends React.Component {
  static propTypes = {
    getDonations: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      donations: [],
    };
  }
  componentWillMount() {
    const donations = this.state.donations.length;
    if (!donations) {
      this.setState({
        donations: this.props.getDonations(this.state._id),
      });
    }
  }

  shoudComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) return true;
    return false;
  }

  render() {
    return (
      <div>
        <h1>My Account</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  _id: state.user._id,
});
const mapDispatchToProps = dispatch => ({
  getDonations: userId => dispatch(donorActions.getDonations(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(myAccount);
