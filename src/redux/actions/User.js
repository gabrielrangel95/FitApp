import { Types } from '@redux/types';

export const UserActions = {
  setUserGoal: goal => ({
    type: Types.USER_SET_GOAL,
    payload: {
      goal,
    },
  }),
  setUserHeight: height => ({
    type: Types.USER_SET_HEIGHT,
    payload: {
      height,
    },
  }),
  setUserAge: age => ({
    type: Types.USER_SET_AGE,
    payload: {
      age,
    },
  }),
};
