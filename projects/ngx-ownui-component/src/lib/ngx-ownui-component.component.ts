import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'lib-ngx-ownui-component',
  template: `
  <div style="position: relative; width: 100%;">
  <div  (click)="selectValueFromArray()">
    <div>Option: <input [value]="selectOption" [readonly]="!isSearch" (input)="searchOptionList($event)"></div>
  </div>
 
  <div *ngIf="dropdownClicked">
    <div *ngFor="let play of optionList; let i = index">
      <div (click)="listItemChoosen(play)">{{play}}</div>
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class NgxOwnuiComponentComponent implements OnInit {

  dropdownClicked = true;
  @Input() optionList = Array();
  @Input() selectOption: any;
  @Input() isSearch = false;
  tempOptionList:any = this.optionList;

  constructor(
   ) { }

  ngOnInit(): void {
    this.tempOptionList =this.optionList
  }

 public selectValueFromArray() {
   this.dropdownClicked = !this.dropdownClicked;
  }

  public listItemChoosen(i:any) {
    this.selectOption = i;
    this.dropdownClicked = false;
  }

  public searchOptionList(val:any){
    if(this.isSearch && val.target.value.length > 0){
      this.optionList = this.tempOptionList.filter((t:any) => t.toLowerCase().includes((val.target.value).toLowerCase()))
    }else{
      this.optionList = this.tempOptionList
    }
  }


}
