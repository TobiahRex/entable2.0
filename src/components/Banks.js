import React, { Component } from 'react';
import BankCard from '../Components/BankCard';

export default class Banks extends Component {
  constructor() {
    super();
    this.state = {
      banks: [],
    };
  }
  componentWillReceiveProps({ banks }) {
    this.setState({ banks });
  }

  renderBankCards = () => {
    if (this.state.banks.length) {
      return this.state.banks.map(bank => (
        <BankCard
          key={bank._id}
          image={bank.description.images[0]}
          desc1={bank.description.desc1}
          desc2={bank.description.desc2}
        />)
      );
    }
    return [];
  }

  render = () => (
    <div className="banksContainer">
      <div className="bankCallToAction">
        <h4>Entable is an SMS (Tropo) powered table banking platform
          that pairs under-served women without access to financial
        services to sponsors seeking complete transparency and direct impact.</h4>
      </div>

      <div className="row bankRows">
        <div className="container">
          {/* This component function creates a list of <BankCard />
          components.  Observe render function for more details. */}
          {this.renderBankCards()}
        </div>
      </div>
    </div>
  );
}
