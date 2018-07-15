import { Types } from '@redux/types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function steps(state = initialState, action) {
  switch (action.type) {
    case Types.STEPS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.STEPS_GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.STEPS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
