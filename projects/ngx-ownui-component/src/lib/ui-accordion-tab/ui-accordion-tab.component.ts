import { Component, Input, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { UiAccordionService } from './ui-accordion.service';

@Component({
  selector: 'lib-ui-accordion-tab',
  templateUrl: './ui-accordion-tab.component.html',
  styleUrls: ['./ui-accordion-tab.component.css']
})
export class UiAccordionTabComponent implements OnInit, AfterContentInit {

  isOpened:boolean = false;
  @Input() title: string | undefined;
  @Input() id:any;

  constructor(
    public elementRef: ElementRef,
    public accordionService:UiAccordionService
    ) { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
   
  }

  selectedId(val:any){
   this.accordionService.changeAccordionId(val)
  }
}
