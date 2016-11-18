import React, { PropTypes } from 'react';

const TextBitcoinForm = ({ sendText, onInputChange }) => (
  <form className="infoForm" onSubmit={sendText}>
    <div className="form-group">
      <label className="sr-only" htmlFor="entableBitcoinAddress">
        Our Bit Coin Address
      </label>
      <input
        id="entableBitcoinAddress"
        type="text"
        className="form-control"
        defaultValue="19Ms9tlqtcqAJ1ue36e9kjnyzkkLy18EQuBY"
      />
    </div>

    {/* <div className="form-group">
      <label className="sr-only" htmlFor="email" >
      Supporter Email
      </label>
      <input
      id="email"
      type="email"
      className="form-control"
      placeholder="your_email_here@gmail.com"
      onChange={e =>
      onInputChange(e.target.getAttribute('id'), e.target.value)}
      />
    </div> */}

    <div className="form-group">
      <label className="sr-only" htmlFor="exampleInputPassword3">
        {('Supporter\'s')} Name
      </label>
      <input
        id="name"
        type="text"
        className="form-control"
        placeholder="Your Name"
        onChange={e =>
          onInputChange(e.target.getAttribute('id'), e.target.value)}
      />
    </div>
    <div className="form-group">
      <label className="sr-only" htmlFor="exampleInputPassword3">
        {('Supporter\'s')} Phone number
      </label>
      <input
        id="phone"
        type="text"
        className="form-control"
        placeholder="Your Phone Number (1-415-123-4567)"
        onChange={e =>
        onInputChange(e.target.getAttribute('id'), e.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-default btn-block btnFormBottom">Text Me Bitcoin Address</button>
  </form>
);

TextBitcoinForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  sendText: PropTypes.func.isRequired,
};
export default TextBitcoinForm;
