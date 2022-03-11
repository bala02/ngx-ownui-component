import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-alert',
  templateUrl: './ui-alert.component.html',
  styleUrls: ['./ui-alert.component.css']
})
export class UiAlertComponent implements OnInit {

  @Input() type:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
