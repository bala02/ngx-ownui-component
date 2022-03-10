import { Component, Input, OnInit } from '@angular/core';
import { UiSelectService } from '../ui-select/ui-select.service';

@Component({
  selector: 'lib-ui-option',
  templateUrl: './ui-option.component.html',
  styleUrls: ['./ui-option.component.css']
})
export class UiOptionComponent implements OnInit {

  @Input() label:any | undefined;
  @Input() value:any;
  isSelected:boolean = false;
  isDisplay:boolean = true;
  isEmpty:boolean = false;

  constructor(
    private selectService:UiSelectService
  ) { }

  ngOnInit(): void {
  }

  chooseOption(val:any){
    this.selectService.changeOption(val)
  }
}
