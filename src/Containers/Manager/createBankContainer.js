import React from 'react';
import moment from 'moment';

class CreateBank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bankName: '',
      date: moment().format('lll'),
    };
  }

  render() {
    return (
      <div>
        <h2>Create Bank</h2>
      </div>
    );
  }
}
export default CreateBank;
