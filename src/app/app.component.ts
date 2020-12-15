/**
 * The reusable dialog program implements a sample application that illustrates implementation of a reusable dialog service,
 * using generics and a SubjectSubscriber.
 *
 * @author  micha@codaa.de
 * @web     https://www.codaa.de
 * @version 1.0
 * @since   2020-12-15
 */

import { ConfirmationDialogComponent } from './dialogs/confirm/confirmation-dialog.component';
import { DialogService } from './dialogs/dialog.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Decision, OpenDialogComponent } from './dialogs/open/open-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _dialogService: DialogService) {
    this._decisionInfo = '';

  }

  public title = 'reusable-dialog';

  private _decisionInfo: string;

  public showConfirmDialog() {
    this._dialogService.openDialog(ConfirmationDialogComponent, 'Are you sure?');
    const subscription: Subscription = this._dialogService
      .getDecision()
      .pipe()
      .subscribe((decision: boolean) => {
        this._decisionInfo = 'Your decision: ' + decision;
        subscription.unsubscribe();
      });
  }

  public showOpenDialog() {
    this._dialogService.openDialog(OpenDialogComponent, 'Please open your file:');
    const subscription: Subscription = this._dialogService
      .getDecision()
      .pipe()
      .subscribe((decision: Decision) => {
        this._decisionInfo = 'Your decision: ' + decision;
        subscription.unsubscribe();
      });
  }

  get decisionInfo(): string {
    return this._decisionInfo;
  }

  set decisionInfo(value: string) {
    this._decisionInfo = value;
  }
}
