import {Action} from "@ngrx/store";

export const SPINNER_SHOW = "[SPINNER] Spinner show";
export const SPINNER_HIDE = "[SPINNER] Spinner hide";

export class HideSpinner implements Action {
  readonly type = SPINNER_HIDE;
}

export class ShowSpinner implements Action {
  readonly type = SPINNER_SHOW;
}

export type SpinnerAction = HideSpinner | ShowSpinner
