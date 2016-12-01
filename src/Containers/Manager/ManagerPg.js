import React, { PropTypes } from 'react';
import moment from 'moment';
import managerActions from '../../Redux/ManagerRedux';

import Footer from '../../Components/Footer';
import managerPgStyles from './managerPgStyles';

class ManagerPage extends React.Component {
  static propTypes = {
    name: PropTypes.objectOf(PropTypes.string),
    addNewTransaction: PropTypes.func.isRequired,
  }
  static styles = managerPgStyles;
  constructor(props) {
    super(props);
    this.state = {
      bankName: '',
      balance: '',
      paidIn: '',
      date: moment().format('lll'),
    };
  }

  render() {
    return (
      <div>
        This is the Manager Page
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  name: {
    firstName: state.user.firstName,
    lastname: state.user.lastName,
  },
});
const mapDispatchToProps = dispatch => ({
  addNewTransaction: info => dispatch(managerActions.newTransaction(info)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ManagerPage);
