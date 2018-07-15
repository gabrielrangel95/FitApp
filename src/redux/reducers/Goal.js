import { Types } from '@redux/types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function goal(state = initialState, action) {
  switch (action.type) {
    case Types.GOAL_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GOAL_GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GOAL_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
