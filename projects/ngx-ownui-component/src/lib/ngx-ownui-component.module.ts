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
import { UiTooltipDirective } from './ui-tooltip/ui-tooltip.directive';
import { UiAlertComponent } from './ui-alert/ui-alert.component';
import { DropdowntoggleDirective } from './ui-dropdown/dropdowntoggle.directive';
import { DropdownmenuDirective } from './ui-dropdown/dropdownmenu.directive';
import { UiProgressbarComponent } from './ui-progressbar/ui-progressbar.component';
import { UiRangeSliderComponent } from './ui-range-slider/ui-range-slider.component';
import { UiDrawerComponent } from './ui-drawer/ui-drawer.component';
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
    UiDetailPaginationComponent,
    UiTooltipDirective,
    UiAlertComponent,
    DropdowntoggleDirective,
    DropdownmenuDirective,
    UiProgressbarComponent,
    UiRangeSliderComponent,
    UiDrawerComponent
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
    UiDetailPaginationComponent,
    UiTooltipDirective,
    UiAlertComponent,
    DropdowntoggleDirective,
    DropdownmenuDirective,
    UiProgressbarComponent,
    UiRangeSliderComponent,
    UiDrawerComponent
  ]
})
export class NgxOwnuiComponentModule { }
