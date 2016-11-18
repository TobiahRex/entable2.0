import React, { PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class AmtModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      agree: false,
      showModal: false,
    };
  }

  componentWillReceiveProps({ showModal }) {
    console.log('MODAL: ', showModal);
    if (showModal !== this.state.showModal) {
      this.setState({ showModal });
    }
  }
  shouldComponentUpdate({ showModal }) {
    if (this.state.showModal === showModal) return false;
    return true;
  }

  close = () => this.setState({ showModal: false })

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <h4>Popover in a modal</h4>
          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.close}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default AmtModal;
