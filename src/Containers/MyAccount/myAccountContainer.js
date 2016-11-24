import React from 'react';
import donorActions from '../../Redux/DonorRedux';

class myAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      donations: [],
    };
  }
  componentWillMount() {
    const donations = this.state.donations.length;
    if (!donations) {
      this.setState({
        donations: this.props.getDonations(),
      });
    }
  }

  render() {
    return(
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
  getDonations: userId => dispatch(donorActions.getDonations(userId))
})
