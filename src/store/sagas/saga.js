import { takeEvery, delay } from 'redux-saga/effects';
import { GET_TITLES } from '../actions/types';

export function* getTitles() {
  yield delay(1000);
  console.log('Fetching Movies from the Movie DB');
}

export default function* rootSaga() {
  yield takeEvery(GET_TITLES, getTitles);
}
