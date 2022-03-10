import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-ui-accordion-tab',
  templateUrl: './ui-accordion-tab.component.html',
  styleUrls: ['./ui-accordion-tab.component.css']
})
export class UiAccordionTabComponent implements OnInit {

  @Input() opened = false;
  @Input() title: string | undefined;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Input() id:any;
  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
    
  }

}
