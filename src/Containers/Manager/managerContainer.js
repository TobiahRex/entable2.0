import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import managerActions from '../../Redux/ManagerRedux';
import ManageBank from './manageBankContainer';
import CreateBank from './createBankContainer';
import Footer from '../../Components/Footer';
import managerContainerStyles from './managerPgStyles';

class ManagerContainer extends React.Component {
  static propTypes = {
    findBankManager: PropTypes.func.isRequired,
  }
  static styles = managerContainerStyles;
  constructor(props) {
    super(props);
    this.state = {
      manager: null,
      bank: null,
    };
  }

  componentWillMount() {
    this.props.findBankManager();
  }

  componentWillReceiveProps({ manager, bank }) {
    if (this.state.manager !== manager) {
      this.setState({ manager });
    } else if (this.state.bank !== bank) {
      this.setState({ bank });
    }
  }

  shouldComponentUpdate({ bank }, { manager }) {
    if (this.state.manager !== manager) return true;
    else if (this.state.bank !== bank) return true;
    return false;
  }

  render() {
    const { manager } = this.state;
    return (
      <div
        style={ManagerContainer.styles.mgrContainer}
        id="managerContainer"
      > { manager ? <ManageBank /> : <CreateBank testProps='this is a test prop' /> }
        <Footer />
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
  findBankManager: () => dispatch(managerActions.findBankManager(routeParams.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ManagerContainer);
