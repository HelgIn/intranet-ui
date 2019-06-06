import {SPINNER_HIDE, SPINNER_SHOW, SpinnerAction} from "../actions/spinner.actions";

export interface SpinnerState {
  show: boolean;
}

const initialState: SpinnerState = {
  show: false
};

export function spinnerReducer(state: SpinnerState = initialState, action: SpinnerAction) {
  switch (action.type) {
    case SPINNER_HIDE:
      return { ...state, show: false };
    case SPINNER_SHOW:
      return { ...state, show: true };
    default:
      return state;
  }
}

export const isShowing = (state: SpinnerState) => state.show;
