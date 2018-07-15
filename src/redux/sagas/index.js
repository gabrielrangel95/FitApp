import { all, takeLatest } from 'redux-saga/effects';
import { Types } from '@redux/types';

import { getGoals } from './Goal';
import { getSteps } from './Steps';

export default function* rootSaga() {
  return yield all([
    takeLatest(Types.GOAL_GET_REQUEST, getGoals),
    takeLatest(Types.SETPS_GET_REQUEST, getSteps),
  ]);
}
