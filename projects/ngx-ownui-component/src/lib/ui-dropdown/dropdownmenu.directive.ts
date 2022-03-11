import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[libDropdownmenu]'
})
export class DropdownmenuDirective {

  constructor(private elementref:ElementRef) {
    this.elementref.nativeElement.classList.add('dropdown-menu')
  }

}
