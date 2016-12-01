import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import managerActions from '../../Redux/ManagerRedux';

import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import managerPgStyles from './managerPgStyles';

/* NOTE
  Right now there is no dynamic way in which a newly registered Bank manager is put in control of a particular bank, or is able to CREATE a bank.  Need to put some thought into this.  For now, I will assign a Bank Manager or "chair" to a preset Bank from Postman.
*/

class ManagerPage extends React.Component {
  static propTypes = {
    banks: PropTypes.arrayOf(PropTypes.object),
    addNewTransaction: PropTypes.func.isRequired,
    routeParams: PropTypes.objectOf(PropTypes.string),
  }
  static styles = managerPgStyles;
  static breadcrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  }, {
    href: '/manager_account',
    name: 'My Account',
    active: true,
  }]
  constructor(props) {
    super(props);
    this.state = {
      bank: null,
      balance: '',
      paidIn: '',
      date: moment().format('lll'),
    };
  }

  componentWillMount() {
    this.filterBanks(this.props.routeParams.id, this.props.banks);
  }

  filterBanks = (id, banks) => {
    let bank = {};
    bank = banks.filter(bankObj => bankObj.people.chair === id);
    this.setState({ bank: bank[0] });
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div style={ManagerPage.styles.mainBgColor}>
        <Breadcrumbs paths={ManagerPage.breadcrumbs} />
        <div>
          {this.state.bankName}
        </div>
        This is the Manager Page
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = ({ user, bank }) => ({
  name: {
    firstName: user.firstName,
    lastname: user.lastName,
  },
  banks: bank.banks,
});
const mapDispatchToProps = dispatch => ({
  addNewTransaction: info => dispatch(managerActions.newTransaction(info)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ManagerPage);
