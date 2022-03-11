import { Component, EventEmitter,ContentChildren,ViewChildren,ViewChild,ElementRef, QueryList, AfterContentInit, OnInit, Output  } from '@angular/core';
import { UiAccordionTabComponent } from '../ui-accordion-tab/ui-accordion-tab.component'
import { UiAccordionService } from '../ui-accordion-tab/ui-accordion.service';

@Component({
  selector: 'lib-ui-accordion',
  templateUrl: './ui-accordion.component.html',
  styleUrls: ['./ui-accordion.component.css']
})
export class UiAccordionComponent implements OnInit {

  isOpen = false;
  @Output() accordionChanges:EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(UiAccordionTabComponent) accordionTabs: QueryList<UiAccordionTabComponent> | undefined;
  tempAccordionTabs:any =[]

  constructor(public accordionService:UiAccordionService) {
    }

    ngAfterContentInit(): void {
      this.tempAccordionTabs = this.accordionTabs;
      this.accordionService.getAccordionId().subscribe((res)=>{
        this.tempAccordionTabs.length > 0 && this.tempAccordionTabs._results.forEach((element:any, ind:any) => {
            if(element.id === res){
              this.tempAccordionTabs._results[ind].isOpened = true;
            }
            if(element.id != res){
              this.tempAccordionTabs._results[ind].isOpened = false;
            }
        });
      })

      this.tempAccordionTabs.length > 0 && (this.tempAccordionTabs._results[0].isOpened = true);

    }

    ngOnInit(): void {
      
    }

}
