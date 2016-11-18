import React, { PropTypes } from 'react';

class AmtModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      agree: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('MODAL received props: \n', nextProps);
  }

  render() {
    return (
      <div className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <p>One fine body&hellip;</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AmtModal;
