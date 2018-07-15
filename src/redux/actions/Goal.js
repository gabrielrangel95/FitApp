import { Types } from '@redux/types';

export const GoalActions = {
  getGoalRequest: () => ({
    type: Types.GOAL_GET_REQUEST,
  }),
  getGoalSuccess: data => ({
    type: Types.GOAL_GET_SUCCESS,
    payload: {
      data,
    },
  }),
  getGoalFailure: error => ({
    type: Types.GOAL_GET_FAILURE,
    payload: {
      error,
    },
  }),
};
