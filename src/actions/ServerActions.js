import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  updateBanks(banks) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_BANKS',
      payload: { banks },
    });
  },
};

export default ServerActions;
