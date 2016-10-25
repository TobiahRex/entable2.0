import React, { Component } from 'react';
import Header from './Header';
import Banks from './Banks';
import Info from './Info';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banks />
        <Info />
        <Footer />
      </div>
    )
  }
};
