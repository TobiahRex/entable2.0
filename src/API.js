import axios from 'axios';
import io from 'socket.io-client';
import ServerActions from './actions/ServerActions';

const socket = io();
socket.on('banks', data => ServerActions.updateBanks(data));

const API = {
  getAll() {
    axios.get('/api/tropo')
      .then(res => ServerActions.updateBanks(res.data))
      .catch((err) => { throw new Error('/api/tropo ERROR:', err); });
  },
};

export default API;
