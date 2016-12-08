import React, { PropTypes } from 'react';
import { CircularProgress } from 'material-ui';

const reDonateButtons = ({ reDonate }) => (
  <div className="redonateOptions">
    <div className="redonateContainer">
      <button
        className="redonateButton"
        onClick={e => reDonate(e)}
      >Re-Donate</button>
    </div>
    <div className="lodaingContainer">
      <CircularProgress size={80} thickness={5} />
    </div>
  </div>
);
reDonateButtons.propTypes = {
  reDonate: PropTypes.func,
};
export default reDonateButtons;
