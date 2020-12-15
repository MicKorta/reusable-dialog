
/**
 * Module class for the confirmation dialog.
 *
 * @author  micha@codaa.de
 * @web     https://www.codaa.de
 * @version 1.0
 * @since   2020-12-15
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenDialogComponent } from './open-dialog.component';
import { DialogService } from '../dialog.service';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    OpenDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    OpenDialogComponent
  ],
  providers: [
    DialogService,
  ]
})
export class OpenDialogModule {
    // NOOP
}
