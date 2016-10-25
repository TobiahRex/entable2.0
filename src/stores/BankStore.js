import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';
import API from '../API';

API.getAll();

let _banks = [];

class EntableStore extends EventEmitter {
  constructor () {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        case 'RECEIVE_BANKS':
          let banks = action.payload.banks;
          _banks = banks[0];
          // console.log('STORE _banks: ', _banks);
          this.emit('CHANGE');
          break;
        default:
          console.log('INVALID_ACTION_TYPE');
          break;
      }
    });
  }

  startListening(callback) {
    this.on('CHANGE', callback);
  }

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  }

  getBanks(){
    return _banks;
  }
}

export default new EntableStore();
