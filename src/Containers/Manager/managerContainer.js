import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import managerActions from '../../Redux/ManagerRedux';

class ManagerContainer extends React.Component {
  static propTypes = {
    findBankManager: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      manager: null,
    };
  }
  
}

const mapDispatchToProps = (dispatch, { routeParams }) => ({
  findBankManger: () => dispatch(managerActions.findBankManager(routeParams.id)),
});
export default connect(null, mapDispatchToProps)(ManagerContainer);
