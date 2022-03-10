import { Component, EventEmitter,ContentChildren,ViewChildren,ViewChild,ElementRef, QueryList, AfterContentInit, OnInit, Output  } from '@angular/core';
import { UiAccordionTabComponent } from '../ui-accordion-tab/ui-accordion-tab.component'

@Component({
  selector: 'lib-ui-accordion',
  templateUrl: './ui-accordion.component.html',
  styleUrls: ['./ui-accordion.component.css']
})
export class UiAccordionComponent implements OnInit {

  isOpen = false;
  @Output() accordionChanges:EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(UiAccordionTabComponent) panels: QueryList<UiAccordionTabComponent> | undefined;
  constructor() {
    }
    ngAfterContentInit(): void {
       this.accordionChanges.emit(this.panels)
    }

    ngOnInit(): void {
      
    }

}
