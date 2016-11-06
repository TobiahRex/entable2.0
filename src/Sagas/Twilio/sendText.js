import { call, put } from 'redux-saga/effects';
import twilioActions from '../../Redux/TwilioRedux';
import apiActions from '../../Redux/ApiRedux';

export default function* sendText(api, { text }) {
  const response = yield call(() => api.sendText(text));

  if (response.ok) {
    yield [put(twilioActions.textSuccess(response.data)),
    put(apiActions.apiSuccess())];
  } else {
    yield [put(twilioActions.textFail(response.data)),
    put(apiActions.apiFail(response.data))];
  }
}
