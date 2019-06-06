import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {createFeatureSelector, createSelector, Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {isShowing, SpinnerState} from "../../reducers/spinner.reducer";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {

  loading$: Observable<any>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    const selectSpinnerEntity = createFeatureSelector<SpinnerState>(
      "spinner"
    );
    const isSpinnerShowing = createSelector(
      selectSpinnerEntity,
      isShowing
    );
    this.loading$ = this.store.select(isSpinnerShowing)
  }

}
