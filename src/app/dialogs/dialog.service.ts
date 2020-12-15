/**
 * This is the reusable dialog service class.
 *
 * @author  micha@codaa.de
 * @web     https://www.codaa.de
 * @version 1.0
 * @since   2020-12-15
 */

import { Observable, Subject } from 'rxjs';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  private subject = new Subject<any>();

  constructor(private _dialog: MatDialog) {
    // NOOP
  }

  public openDialog<T>(comp: new (...args: any[]) => T, header: string) {
    let dialogRef: MatDialogRef<T>;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      header: header,
    };
    dialogRef = this._dialog.open(comp, dialogConfig);
    dialogRef.afterClosed().pipe().subscribe(ret => {
      this.subject.next(ret);
    }, err => {
      console.error(err.message);
    });
  }

  public getDecision(): Observable<any> {
    return this.subject.asObservable();
  }
}
