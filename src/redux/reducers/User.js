import { Types } from '@redux/types';

const initialState = {
  goal: null,
  age: false,
  height: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.USET_SET_GOAL:
      return {
        ...state,
        goal: action.payload.goal,
      };
    case Types.USER_SET_HEIGHT:
      return {
        ...state,
        height: action.payload.height,
      };
    case Types.USER_SET_AGE:
      return {
        ...state,
        age: action.payload.age,
      };
    default:
      return state;
  }
}
