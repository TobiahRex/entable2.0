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
    console.log('this.props: ', this.props);
    return (
      <span>
        <div className="bankNotesContainer text-center">
          {this.renderNotes()}
        </div>
      </span>
    );
  }
}

export default BankManagerNotes;
