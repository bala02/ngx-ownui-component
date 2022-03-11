import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-progressbar',
  templateUrl: './ui-progressbar.component.html',
  styleUrls: ['./ui-progressbar.component.css']
})
export class UiProgressbarComponent implements OnInit {
  @Input() percent:any;
  @Input() value:any;


  constructor() { }

  ngOnInit(): void {
  }

}
