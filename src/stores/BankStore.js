import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import API from '../API';

// API.getAll();

let _banks = [];

class EntableStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        case 'RECEIVE_BANKS': {
          const banks = action.payload.banks;
          _banks = banks[0];
          this.emit('CHANGE');
        } break;
        default: break;
      }
    });
  }

  startListening(callback) {
    this.on('CHANGE', callback);
  }

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  }

  getBanks() { //eslint-disable-line
    return _banks;
  }
}

export default new EntableStore();
