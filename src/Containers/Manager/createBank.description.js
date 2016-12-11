import React, { PureComponent } from 'react';

export default class CreateBankDescription extends PureComponent {
  render() {
    return (
      <div id="ctaWelcomeMessage">
        <h4>Thanks for Becoming a Bank Manager</h4>
        <p>{'Bank managers track the distribution of the donated funds "out, and the re-payments "in". Future and Past donors will be relying on the Bank Managers to provide transparent and reliable transaction information.'}</p>
        <p>{'This Virtual Bank is where you will manage and record the distribution of Donations to Bank members in your area, as well track and document their return payments to the Bank. Let\'s get started by creating a Virtual Bank on Entable.'}</p>
        <br />
        <p>{'Click the "Create Bank" button below to get started.'}</p>
      </div>
    );
  }
}
