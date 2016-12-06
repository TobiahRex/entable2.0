import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Griddle from 'griddle-react';
import donorStyles from './donorStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';
import MainCarousel from '../../Components/Carousel/carouselMain';
import DonationButtons from '../../Components/Donation/DonationButtons';
import RedonateButtons from '../../Components/Donation/ReDonateButtons';

/* TODO
  1. Need to move Carousel components into their own component.
  2. Need to dynamically provide Carousel components with all transaction data from the bank that the donor has contributed to.
  3. Need to finish rendering the with that information.
  IDEA: Perhaps think about categorizing the data into - NEWS information, and TRANSACTION information.
*/

const ReactToastr = require('react-toastr');

const ToastFactory = React.createFactory(ReactToastr.ToastMessage.animation);
const { ToastContainer } = ReactToastr;


class DonationPg extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
  }
  static breadCrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  },
  {
    href: null,
    name: 'My Account',
    active: true,
  }]
  static styles = donorStyles;
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      name: {
        first: '',
        last: '',
      },
      acceptTerms: false,
    };
    this.toast = {
      loginSuccess: null,
    };
  }

  componentDidMount() {
    console.warn('are you even here??', this.props);
    if (this.props.active) {
      this.toast.loginSuccess.success('YO');
    }
  }

  componetWillUpdate(nextProps, nextState) {
    if (this.state.acceptTerms) {
      console.info('USER ACCEPTED TERMS: ', nextState.acceptTerms);
    } else {
      console.warn('User has NOT accepted Donation terms.', nextState.acceptTerms);
    }
  }

  submitDonation() {
    if (this.state.amount > 300) {
      throw Error('Sorry that donation amount is too much.  Please use our Wire Transfer form instead.');
    }
  }

  render() {
    window.scrollTo(0, 0);
    const carouselData = [
      {
        _id: 1234,
        image: '/assets/images/girl-469157.jpg',
        bank: 'Bank of Tanzania',
        name: 'Nulla Wambosi',
        description: 'Nulla purchased fresh meat and produce for her family with 3500 MPESA on October 21nd, 2016.',
      },
      {
        _id: 4567,
        image: '/assets/images/girl-444688.jpg',
        bank: 'Bank of Tanzania',
        name: 'Datyiva Moore',
        description: 'Datyiva bought her son books for school with 1500 MPESA on November 16th, 2016.',
      },
      {
        _id: 8901,
        image: '/assets/images/mother-434355.jpg',
        bank: 'Bank of Tanzania',
        name: 'Isaac Butumbo',
        description: 'Isaac was born on November 18th, 2016.  His mother Ivy, pictured here was able to pay the doctors with 20,000 MPESA received from our Bank.',
      },
    ];
    const tableData = [
      {
        _id: 1234,
        Date: moment().format('lll'),
        Bank: 'Bank of Tanzania',
        Name: 'Clark Kent',
        Role: 'Donor',
        Donated: '$200',
        Borrowed: '',
      },
      {
        _id: 1234,
        Date: moment().format('lll'),
        Bank: 'Bank of Tanzania',
        Name: 'Nulla Wambosi',
        Role: 'Member',
        Donated: '',
        Borrowed: '1,500 m-pesa',
      },
      {
        _id: 4567,
        Date: moment().format('lll'),
        Bank: 'Bank of Tanzania',
        Name: 'Datyiva Moore',
        Role: 'Member',
        Donated: '',
        Borrowed: '2,500 m-pesa',
      },
      {
        _id: 4567,
        Date: moment().format('lll'),
        Bank: 'Bank of Tanzania',
        Name: 'Bruce Wayne',
        Role: 'Donor',
        Donated: '$100,000',
        Borrowed: '2,500 m-pesa',
      },
      {
        _id: 8901,
        Date: moment().format('lll'),
        Bank: 'Bank of Tanzania',
        Name: 'Isaac Butumbo',
        Role: 'Member',
        Donated: '',
        Borrowed: '25,000 m-pesa',
      },
    ];
    return (
      <div>
        <div style={DonationPg.styles.mainBgColor}>
          <Breadcrumbs paths={DonationPg.breadCrumbs} />
          <div style={DonationPg.styles.donorTitle}>
            <h2>Hi {this.props.firstName},</h2>
            <br />
            <h4 style={DonationPg.styles.donorH4}>{'Here\'s'} {'what\'s'} been happening at the banks that {'you\'ve'} donated to while {'you\'ve'} been away.</h4>
            <br />
          </div>
          <div style={DonationPg.styles.carouselContainer}>
            <MainCarousel transactions={carouselData} />
          </div>
        </div>
        <div style={DonationPg.styles.donationsTitle}>
          <h4 style={DonationPg.styles.infoH4}>
            {'Here\'s'} our latest incoming donations
            & outgoing loans.
          </h4>
          <div style={DonationPg.styles.griddleContainer}>
            <Griddle
              // tableClassName="table"
              // style={DonationPg.styles.griddleDiv}
              results={tableData}
              // showFilter
              showSettings
              columns={['Bank', 'Date', 'Name', 'Role', 'Donated', 'Borrowed']}
            />
          </div>
          {/* <DonationButtons /> */}
          {/* <RedonateButtons /> */}
        </div>
        <Footer />
        <div>
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
const mapStateToProps = ({ user }) => ({
  active: user.active,
  firstName: user.firstName,
  lastName: user.lastName,
});
export default connect(mapStateToProps, null)(DonationPg);
