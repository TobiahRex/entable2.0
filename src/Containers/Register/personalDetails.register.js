import React, { PropTypes, PureComponent } from 'react';

class personalDetails extends PureComponent {
  static propTypes = {
    firstName: PropTypes.objectOf(PropTypes.any.isRequired),
    lastName: PropTypes.objectOf(PropTypes.any.isRequired),
    email: PropTypes.objectOf(PropTypes.any.isRequired),
    postZip: PropTypes.objectOf(PropTypes.any.isRequired),
    phone: PropTypes.objectOf(PropTypes.any.isRequired),
  }
  static PROPS = {
    firstName: {
      id: 'firstName',
      type: 'text',
      name: 'First Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
    },
    lastName: {
      id: 'lastName',
      type: 'text',
      name: 'Last Name',
      required: true,
      vSuccess: 1,
      vWarn: 1,
      vError: 2,
    },
    email: {
      id: 'email',
      type: 'email',
      name: 'Email Address',
      required: true,
    },
    postZip: {
      id: 'postZip',
      type: 'text',
      name: 'Post / Zip Code',
      required: true,
      vSuccess: 4,
      vWarn: 1,
      vError: 0,
    },
    phone: {
      id: 'phone',
      name: 'Phone Number',
      required: true,
      requiredMsg: ' 123-456-7890',
      vSuccess: 11,
      vWarning: 10,
      vError: 1,
    },
  }
  render() {
    return (
      <span>
        yo
      </span>
    );
  }
}
export default personalDetails;
