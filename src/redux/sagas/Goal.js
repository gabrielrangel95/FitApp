import { put } from 'redux-saga/effects';
import { GoalActions } from '@redux/actions/Goal';

const goalData = [
  {
    title: 'Lose weight',
    subTitle: 'Burn fat & get lean',
    value: 'lose_weight',
  },
  {
    title: 'Get fitter',
    subTitle: 'Tone up & feel healthy',
    value: 'get_fitter',
  },
  {
    title: 'Gain muscle',
    subTitle: 'Build mass & strength',
    value: 'gain_muscle',
  },
];

export function* getGoals() {
  try {
    yield put(GoalActions.getGoalSuccess(goalData));
  } catch (error) {
    yield put(GoalActions.getGoalFailure(error));
  }
}
