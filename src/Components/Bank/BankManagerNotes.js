import React, { PropTypes, PureComponent } from 'react';

class BankManagerNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
  }
  renderNotes = () =>
  this.props.notes.map(note => (
    <div className="transactionItem" key={note._id}>
      <br />
      <p>
        <span className="timeStamp">{note.date}</span>
        <span className="bankerName">{note.name} - <i>{note.role}</i>
        </span>
      </p>
      <p>{note.description}</p>
      <hr className="bankHistoryHr" />
    </div>
  ))
  render() {
    const notes = this.props.notes ? this.renderNotes : 'No Notes to render';
    return (
      <span>
        <div className="bankNotesContainer text-center">
          {notes}
        </div>
      </span>
    );
  }
}

export default BankManagerNotes;
