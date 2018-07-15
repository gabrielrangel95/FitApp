import { Types } from '@redux/types';

export const StepsActions = {
  getStepsRequest: () => ({
    type: Types.SETPS_GET_REQUEST,
  }),
  getStepsSuccess: data => ({
    type: Types.SETPS_GET_SUCCESS,
    payload: {
      data,
    },
  }),
  getStepsFailure: error => ({
    type: Types.SETPS_GET_FAILURE,
    payload: {
      error,
    },
  }),
};
