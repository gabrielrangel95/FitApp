import { put } from 'redux-saga/effects';
import { StepsActions } from '@redux/actions/Steps';

const stepsQuestions = [
  {
    id: 'age_question',
    title: 'How old are you?',
  },
  {
    id: 'height_question',
    title: 'How tall are you?',
  },
];

export function* getSteps() {
  try {
    yield put(StepsActions.getStepsSuccess(stepsQuestions));
  } catch (error) {
    yield put(StepsActions.getStepsFailure(error));
  }
}
