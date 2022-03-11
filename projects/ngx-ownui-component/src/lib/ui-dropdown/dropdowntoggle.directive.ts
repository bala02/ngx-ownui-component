import { Directive, HostListener, Input, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[libDropdowntoggle]'
})
export class DropdowntoggleDirective implements AfterContentInit  {

  @Input() dropdownId: any;
  dropDownMenuList: any = [];

  constructor() {
  }

  @HostListener('click') onClick() {
    this.dropDownMenuList.forEach((element:any) => {
      if (element.id === this.dropdownId) {
        if (!element.classList.contains('drop-down-show')) {
          element.classList.add('drop-down-show')
        } else {
          element.classList.remove('drop-down-show')
        }
      }
      if (element.id != this.dropdownId) {
        if (element.classList.contains('drop-down-show')) {
          element.classList.remove('drop-down-show')
        }
      }
    });
  }

  ngAfterContentInit(): void {
    this.dropDownMenuList = document.querySelectorAll('[libDropdownmenu]')
  }
}
