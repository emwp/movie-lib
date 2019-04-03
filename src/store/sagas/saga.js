import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_TITLES } from '../actions/types';
import api from '../../api/api';
import { setTitles } from '../actions/actions';

const fetchTitles = async () => {
  const response = await api.get('/movie/popular');
  return response.data.results;
};

export function* getTitles() {
  const titles = yield call(fetchTitles);
  yield put(setTitles(titles));
}

export default function* rootSaga() {
  yield takeEvery(GET_TITLES, getTitles);
}
