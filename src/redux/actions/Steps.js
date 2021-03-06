import { Types } from '@redux/types';

export const StepsActions = {
  getStepsRequest: () => ({
    type: Types.STEPS_GET_REQUEST,
  }),
  getStepsSuccess: data => ({
    type: Types.STEPS_GET_SUCCESS,
    payload: {
      data,
    },
  }),
  getStepsFailure: error => ({
    type: Types.STEPS_GET_FAILURE,
    payload: {
      error,
    },
  }),
  goToNextStep: () => ({
    type: Types.STEPS_GO_NEXT,
  }),
  goToBackStep: () => ({
    type: Types.STEPS_GO_BACK,
  }),
};
