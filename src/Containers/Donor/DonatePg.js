import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap/lib';
import Griddle from 'griddle-react';
import donorStyles from './donorStyles';
import Breadcrumbs from '../../Components/Breadcrumb';
import Footer from '../../Components/Footer';

class DonationPg extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }
  static breadCrumbs = [{
    href: '/',
    name: 'Home',
    active: false,
  },
  {
    href: '/donor_account',
    name: 'Profile',
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
  }

  componentWillReceiveProps(nextProps) {
    console.log('Donation Page - nextProps: ', nextProps);
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
    const fakeData = [
      {
        'id': 0,
        'name': 'Mayer Leonard',
        'city': 'Kapowsin',
        'state': 'Hawaii',
        'country': 'United Kingdom',
        'company': 'Ovolo',
        'favoriteNumber': 7,
      },
      {
        'id': 0,
        'name': 'Mayer Leonard',
        'city': 'Kapowsin',
        'state': 'Hawaii',
        'country': 'United Kingdom',
        'company': 'Ovolo',
        'favoriteNumber': 7,
      },
      {
        'id': 0,
        'name': 'Mayer Leonard',
        'city': 'Kapowsin',
        'state': 'Hawaii',
        'country': 'United Kingdom',
        'company': 'Ovolo',
        'favoriteNumber': 7,
      },
    ];
    return (
      <div style={DonationPg.styles.mainBgColor}>
        <Breadcrumbs paths={DonationPg.breadCrumbs} />
        <div style={DonationPg.styles.donorTitle}>
          <h2>Hey {this.props.firstName},</h2>
          <br />
          <h4 style={DonationPg.styles.donorH4}>{'Here\'s'} {'what\'s'} happened in the banks that {'you\'ve'} donated to since {'you\'ve'} been away.</h4>
          <br />
          <div>
            <Carousel>
              <Carousel.Item>
                <h3 style={DonationPg.styles.h3Carousel}>Bank of Tanzania</h3>
                <img
                  style={DonationPg.styles.imgCarousel}
                  width={900}
                  height={500}
                  alt="900x500"
                  src="./girl-469157.jpg"
                />
                <Carousel.Caption>
                  <div style={DonationPg.styles.capContainCarousel}>
                    <h3 style={DonationPg.styles.carouselH3}>Nulla Wambosi</h3>
                    <p style={DonationPg.styles.pCarousel}>
                      Nulla purchased fresh meat and produce for her family with 3500 MPESA on October 21nd, 2016.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h3 style={DonationPg.styles.h3Carousel}>
                  Bank of Tanzania
                </h3>
                <img
                  style={DonationPg.styles.imgCarousel}
                  width={900}
                  height={500}
                  alt="900x500"
                  src="./girl-444688.jpg"
                />
                <Carousel.Caption>
                  <div style={DonationPg.styles.capContainCarousel}>
                    <h3 style={DonationPg.styles.carouselH3}>
                      Datyiva Moore
                    </h3>
                    <p style={DonationPg.styles.pCarousel}>
                      Datyiva bought her son books for school with 1500 MPESA on November 16th, 2016.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <h3 style={DonationPg.styles.h3Carousel}>Bank of Tanzania</h3>
                <img
                  style={DonationPg.styles.imgCarousel}
                  width={900}
                  height={500}
                  alt="900x500"
                  src="./mother-434355.jpg"
                />
                <Carousel.Caption>
                  <div style={DonationPg.styles.capContainCarousel}>
                    <h3 style={DonationPg.styles.carouselH3}>
                      Isaac Butumbo
                    </h3>
                    <p style={DonationPg.styles.pCarousel}>
                      Isaac was born on November 18th, 2016.  His mother Ivy, pictured here was able to pay the doctors with 20,000 MPESA received from our Bank.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div style={DonationPg.styles.donationsTitle}>
            <h4 style={DonationPg.styles.donorH4}>
              {'Here\'s'} our latest incoming donations
              & outgoing benefits.
            </h4>
            <br />
            <Griddle
              results={fakeData}
              showFilter
              showSettings
              columns={["name", "city", "country", "amount", "received", "donated"]}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});
export default connect(mapStateToProps, null)(DonationPg);