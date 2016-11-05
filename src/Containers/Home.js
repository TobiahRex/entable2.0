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
  banks: PropTypes.array, //eslint-disable-line
};

const mapStateToProps = state => ({
  banks: state.bank.banks,
});

export default connect(mapStateToProps, null)(Home);
