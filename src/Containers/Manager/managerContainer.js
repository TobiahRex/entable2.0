import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import managerActions from '../../Redux/ManagerRedux';
import ManageBank from './manageBankContainer';
import CreateBank from './createBankContainer';

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

  componentWillMount() {
    this.props.findBankManager();
  }

  componentWillReceiveProps({ manager }) {
    if (this.state.manager !== manager) {
      this.setState({ manager });
    }
  }

  shouldComponentUpdate(nextProps, { manager }) {
    if (this.state.manager !== manager) return true;
    return false;
  }

  render() {
    const { manager } = this.state;
    return (
      <div id="managerContainer">
        { manager ? <ManageBank /> : <CreateBank /> }
      </div>
    );
  }
}
const mapStateToProps = ({ manager }) => ({
  manager: manager._id,
  bank: manager.bank,
  manager_active: manager.manager_active,
});
const mapDispatchToProps = (dispatch, { routeParams }) => ({
  findBankManger: () => dispatch(managerActions.findBankManager(routeParams.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ManagerContainer);
