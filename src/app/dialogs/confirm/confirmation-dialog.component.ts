/**
 * Controller class for the confirmation dialog.
 *
 * @author  micha@codaa.de
 * @web     https://www.codaa.de
 * @version 1.0
 * @since   2020-12-15
 */

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  header: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {

  private _header: string;

  /**
   * INITIALIZATION
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {
    this._header = data.header;
  }

  /**
   * PUBLIC-METHODS
   */
  public decision(value: boolean): void {
    this._dialogRef.close(value);
  }

  /**
   * GETTER
   */
  get header(): string {
    return this._header;
  }
}
