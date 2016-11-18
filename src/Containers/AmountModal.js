import React, { PropTypes } from 'react';
import {
  Modal,
  Button,
  FormGroup,
  InputGroup,
  FormControl,
} from 'react-bootstrap/lib/';

const AmtModal = ({ showModal, verifyAmount, submit, close, sendGift }) => (
  <Modal
    show={showModal}
    onHide={close}
  >
    <Modal.Header closeButton>
      <Modal.Title>Other Amount</Modal.Title>
    </Modal.Header>
    <br />
    <Modal.Body bsClass="text-center">
      <h5>Choose Donation Amount.</h5>
      <p>
        We accept donations between $10 and $3000.00
      </p>
      <br />
      <br />
      <br />
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
                onChange={e => verifyAmount(e.target.value)}
              />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </div>
      </div>
      <br />
    </Modal.Body>
    <Modal.Footer bsClass="amtModalFooter">
      <Button onClick={close}>Cancel</Button>
      <Button onClick={e => submit(e)}>Submit</Button>
    </Modal.Footer>
  </Modal>
);
AmtModal.propTypes = {
  verifyAmount: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
export default AmtModal;
