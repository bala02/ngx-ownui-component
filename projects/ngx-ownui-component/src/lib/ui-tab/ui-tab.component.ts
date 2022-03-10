import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-tab',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.css']
})
export class UiTabComponent implements OnInit {

  @Input() title:any;
  @Input() id:any;
  tabList:any = [];
  isSelected:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
