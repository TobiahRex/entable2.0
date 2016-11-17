import React from 'react';
import { connect } from 'react-redux';

class DonationPg extends React.Component {
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

    componentWillReceiveProps(nextProps) {
      
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationPg);
