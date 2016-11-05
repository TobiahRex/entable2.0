import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';
import Banks from '../Components/Banks';
import Info from '../Components/Info';
import Footer from '../Components/Footer';

export const Home = ({ banks }) => (
  <div>
    <Header />
    <Banks banks={banks} />
    <Info />
    <Footer />
  </div>
);
Home.propTypes = {
  banks: PropTypes.arrayOf({
    contact: PropTypes.objectOf({
      primary: PropTypes.objectOf({
        phone: PropTypes.shape({
          number: PropTypes.string,
          twilio: PropTypes.bool,
        }),
        text: PropTypes.string,
      }),
    }),
    description: PropTypes.objectOf({
      images: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

const mapStateToProps = state => ({
  banks: state.bank.banks,
});

export default connect(mapStateToProps, null)(Home);
