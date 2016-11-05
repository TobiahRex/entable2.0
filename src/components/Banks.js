import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import bankData from './BankDetails/bankData/index';
import BankCard from '../Components/BankCard';

const toBank = () => browserHistory.push('bank');
const toBank2 = () => browserHistory.push('bank2');
const toBank3 = () => browserHistory.push('bank3');
const toBank4 = () => browserHistory.push('bank4');
const toBank5 = () => browserHistory.push('bank5');
const toBank6 = () => browserHistory.push('bank6');
const toFund = () => browserHistory.push('donation');


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
      return this.state.banks.map((bank) => {
        <BankCard
          image={bank.description.images[0]}
          desc1={bank.description.desc1}
          desc2={bank.description.desc2}
        />
      });
    }
    return []
  }

  render() {
    const dummy = bankData.data;
    // const { banks } = this.state;
    return (
      <div className="banksContainer">
      <div className="bankCallToAction">
      <h4>Entable is an SMS (Tropo) powered table banking platform
      that pairs under-served women without access to financial
      services to sponsors seeking complete transparency and direct impact.</h4>
      </div>

      <div className="row bankRows">
      <div className="container">

      <div className="col-md-4 text-center bkMargin">
      <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" role="presentation" src={dummy[5].Images[0]} width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
      <button className="bankViewBtn" onClick={toFund}>Fund Bank</button>
      <button className="bankViewBtn" onClick={toBank}>View Bank</button>
      </div>
      <p className="bankViewDesc">
      {dummy[5].Description1}
      {dummy[5].Description2}
      </p>
      </div>
      </div>

      <div className="col-md-4 text-center bkMargin">
      <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" role="presentation" src={dummy[0].Images[0]} width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
      <button className="bankViewBtn" onClick={toFund}>Fund Bank</button>
      <button className="bankViewBtn" onClick={toBank2}>View Bank</button>
      </div>
      <p className="bankViewDesc">{dummy[0].Description1} {dummy[0].Description2}</p>
      </div>
      </div>

      <div className="col-md-4 text-center bkMargin">
      <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" role="presentation" src={dummy[1].Images[0]} width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
      <button className="bankViewBtn" onClick={toFund}>Fund Bank</button>
      <button className="bankViewBtn" onClick={toBank3}>View Bank</button>
      </div>
      <p className="bankViewDesc">{dummy[1].Description1} {dummy[1].Description2}</p>
      </div>
      </div>

      <div className="col-md-4 text-center bkMargin">
      <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" src={dummy[2].Images[0]} role="presentation" width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
      <button className="bankViewBtn" onClick={toFund}>Fund Bank</button>
      <button className="bankViewBtn" onClick={toBank4}>View Bank</button>
      </div>
      <p className="bankViewDesc">{dummy[2].Description1} {dummy[2].Description2}</p>
      </div>
      </div>

      <div className="col-md-4 text-center bkMargin">
      <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" src={dummy[3].Images[0]} role="presentation" width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
      <button className="bankViewBtn" onClick={toFund}>Fund Bank</button>
      <button className="bankViewBtn" onClick={toBank5}>View Bank</button>
      </div>
      <p className="bankViewDesc">{dummy[3].Description1} {dummy[3].Description2}</p>
      </div>
      </div>

      <div className="col-md-4 text-center bkMargin">
      <div className="bankSingleDisplay panel panel-default">
      <img className="bankImg" src={dummy[4].Images[0]} role="presentation" width="100%" height="80%" />
      <div className="imgTxtContainer" />
      <div className="bankViewBtnDisplay">
      <button className="bankViewBtn" onClick={toFund}>Fund Bank</button>
      <button className="bankViewBtn" onClick={toBank6}>View Bank</button>
      </div>
      <p className="bankViewDesc">{dummy[4].Description1} {dummy[4].Description2}</p>
      </div>
      </div>

      </div>
      </div>
      </div>
    );
  }
}
