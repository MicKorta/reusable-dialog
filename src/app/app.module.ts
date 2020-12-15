/**
 * The reusable dialog program implements a sample application that illustrates implementation of an reusable dialog service,
 * using generics and a SubjectSubscriber.
 *
 * @author  micha@codaa.de
 * @web     https://www.codaa.de
 * @version 1.0
 * @since   2020-12-15
 */

import { OpenDialogModule } from './dialogs/open/open-dialog.module';
import { MaterialModule } from './material.module';
import { ConfirmationDialogModule } from './dialogs/confirm/confirmation-dialog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmationDialogModule,
    OpenDialogModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  // NOOP
}
