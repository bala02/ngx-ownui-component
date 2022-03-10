import { Component, OnInit, Input, ContentChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { UiSelectService } from './ui-select.service';
import { UiOptionComponent } from '../ui-option/ui-option.component';

@Component({
  selector: 'lib-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.css']
})
export class UiSelectComponent implements OnInit {

  dropdownClicked = true;
  @Input() selectedValue: any;
  tempSelectedValue: any;
  @ContentChildren(UiOptionComponent) options: QueryList<UiOptionComponent> | undefined;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Input() isSearch: boolean = false;

  constructor(
    private selectService: UiSelectService
  ) { }

  ngOnInit(): void {
  }

  getValue() {
    let optionList: any = this.options;
    this.selectService.getOption().subscribe((res:any) => {
      if (this.selectedValue != res) {
        this.valueChange.emit();
      }
      optionList._results.forEach((element:any) => {
        if (element.value == res) {
          element.isSelected = true;
        }
        if (element.value != res) {
          element.isSelected = false;
        }
      });
      this.selectedValue = res;
      this.dropdownClicked = !this.dropdownClicked
    })
  }

  ngAfterContentInit(): void {
    let optionList: any = this.options;
    if (optionList && optionList._results.some((t: any) => t.value == this.selectedValue)) {
      this.selectService.changeOption(this.selectedValue)
      this.getValue();
      optionList._results.forEach((element:any) => {
        if (element.value == this.selectedValue) {
          element.isSelected = true;
        }
        if (element.value != this.selectedValue) {
          element.isSelected = false;
        }
      });
    } else {
      this.selectedValue = null;
      this.dropdownClicked = !this.dropdownClicked
    }
  }

  isEmpty:boolean = false;
  searchResult(event:any) {
    let optionList: any = this.options;
    if (this.isSearch && event.target.value.length > 0) {
      optionList._results.forEach((element:any) => {
        if (element.value.toString().toLowerCase().includes(event.target.value.toString().toLowerCase())) {
          element.isDisplay = true;
        }
        if (!element.value.toString().toLowerCase().includes(event.target.value.toString().toLowerCase())) {
          element.isDisplay = false;
        }
      });
    }
    else {
      optionList._results.forEach((element:any) => {
        element.isDisplay = true;
      });
    }
    let searchData:any = optionList._results.length > 0  && optionList._results.filter((e:any) => e.isDisplay == true);
    this.isEmpty = searchData != null && searchData.length > 0 ? false : true;
  }

}
