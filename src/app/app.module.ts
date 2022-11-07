import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  DxDataGridModule,
  DxLookupModule,
  DxTemplateModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxFormModule,
  DxValidatorModule,
  DxPopupModule,
  DxButtonModule,
  DxHtmlEditorModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { ValidatorMessageDirective } from './validator-message.directive';
import { SelectCellTextDirective } from './select-cell-text.directive';
import { CustomHtmlDirective } from './custom-html.directive';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    DxLookupModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxFormModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxPopupModule,
    DxButtonModule,
    DxHtmlEditorModule,
  ],
  declarations: [
    AppComponent,
    ValidatorMessageDirective,
    SelectCellTextDirective,
    CustomHtmlDirective,
    PopupComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent],
})
export class AppModule {}
