import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import managerActions from '../../Redux/ManagerRedux';

import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import managerPgStyles from './managerPgStyles';

/* NOTE
  Right now there is no dynamic way in which a newly registered Bank manager is put in control of a particular bank, or is able to CREATE a bank.  Need to put some thought into this.  For now, I will assign a Bank Manager or "chair" to a preset Bank from Postman by assigning the managers "db._id" as the "bank.people.chair" value.
*/

class ManagerPage extends React.Component {
  static propTypes = {
    bank: PropTypes.objectOf(PropTypes.object),
    addNewTransaction: PropTypes.func.isRequired,
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
      balance: '',
      paidIn: '',
      date: moment().format('lll'),
    };
  }

  render() {
    window.scrollTo(0, 0);
    const bankName = this.props.bank.description.name;
    const currentBal = this.props.bank.finance.balance.current;
    const startingBal = this.props.bank.finance.balance.starting;
    const growthBal = String((currentBal / startingBal) * 100) + ' %'
    return (
      <div style={ManagerPage.styles.mainBgColor}>
        <Breadcrumbs paths={ManagerPage.breadcrumbs} />
        <div>
          <h2>
            Bank Name - {this.props.bank.description.name}
          </h2>
        </div>
        <div id="welcomeBalances">
          <div>
            <h4>Current Balance</h4>
            <div>{this.props.bank.finance.balance.current}</div>
          </div>
          <div>
            <h4>Starting Balance</h4>
            <div>{this.props.bank.finance.balance.starting}</div>
          </div>
          <div>
            <h4>Growth</h4>
            <div>{this.props.bank.finance.balance.current / }</div>
          </div>
        </div>
        This is the Manager Page
        <Footer />
      </div>
    );
  }
}
const filterBanks = (banks, id) => {
  let bank = {};
  bank = banks.filter(bankObj => bankObj.people.chair === id);
  return bank[0];
};

const mapStateToProps = ({ user, bank }, props) => ({
  name: {
    firstName: user.firstName,
    lastname: user.lastName,
  },
  bank: filterBanks(bank.banks, props.routeParams.id),
});
const mapDispatchToProps = dispatch => ({
  addNewTransaction: info => dispatch(managerActions.newTransaction(info)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ManagerPage);
