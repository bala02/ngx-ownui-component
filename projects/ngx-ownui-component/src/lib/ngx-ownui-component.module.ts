import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxOwnuiComponentComponent } from './ngx-ownui-component.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiAccordionComponent } from './ui-accordion/ui-accordion.component';
import { UiAccordionTabComponent } from './ui-accordion-tab/ui-accordion-tab.component';
import { UiTabComponent } from './ui-tab/ui-tab.component';
import { UiTabsetComponent } from './ui-tabset/ui-tabset.component';
import { UiSelectComponent } from './ui-select/ui-select.component';
import { UiOptionComponent } from './ui-option/ui-option.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiShortPaginationComponent } from './ui-short-pagination/ui-short-pagination.component';
import { UiDetailPaginationComponent } from './ui-detail-pagination/ui-detail-pagination.component';
@NgModule({
  declarations: [
    NgxOwnuiComponentComponent,
    UiButtonComponent,
    UiAccordionComponent,
    UiAccordionTabComponent,
    UiTabComponent,
    UiTabsetComponent,
    UiSelectComponent,
    UiOptionComponent,
    UiModalComponent,
    UiShortPaginationComponent,
    UiDetailPaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgxOwnuiComponentComponent,
    UiButtonComponent,
    UiAccordionComponent,
    UiAccordionTabComponent,
    UiTabComponent,
    UiTabsetComponent,
    UiSelectComponent,
    UiOptionComponent,
    UiModalComponent,
    UiShortPaginationComponent,
    UiDetailPaginationComponent
  ]
})
export class NgxOwnuiComponentModule { }
