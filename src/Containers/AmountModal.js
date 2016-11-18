import React, { PropTypes } from 'react';
import {
  Modal,
  Button,
  FormGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap/lib/';

class AmtModal extends React.Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    sendGift: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      agree: false,
      showModal: false,
    };
  }

  componentWillReceiveProps({ showModal }) {
    if (showModal !== this.state.showModal) {
      this.setState({ showModal });
    }
  }
  shouldComponentUpdate({ showModal }) {
    if (this.state.showModal === showModal) return false;
    return true;
  }

  verifyAmount = amount => this.setState({ amount })

  submit = () => {
    if (this.state.amount > 3000) {
      alert('The amount should be less than $3000.  Please try again.');
    } else {
      this.props.sendGift(this.state.amount);
    }
  }

  render() {
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.props.close}
      >
        <Modal.Header closeButton>
          <Modal.Title>Other Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass="text-center">
          <h5>Choose Donation Amount.</h5>
          <p>
            We accept donations between $10 and $3000.00
          </p>
          <hr />
          <div className="amountParent">
            <div>
              <p className="amountQ">
                How much would you like to donate?
              </p>
            </div>
            <div>
              <FormGroup>
                <InputGroup bsClass="amountInput">
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl
                    bsClass="amountValue"
                    type="number"
                    onChange={e => this.verifyAmount(e.target.value)}
                  />
                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close}>Cancel</Button>
          <Button onClick={this.props.submit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default AmtModal;
