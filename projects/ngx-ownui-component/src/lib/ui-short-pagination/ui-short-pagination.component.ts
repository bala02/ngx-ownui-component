import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'lib-ui-short-pagination',
  templateUrl: './ui-short-pagination.component.html',
  styleUrls: ['./ui-short-pagination.component.css']
})
export class UiShortPaginationComponent implements OnInit, AfterContentInit {
  @Input() total:any = 0;
  @Input() size:any = 0;
  @Input() currenIndex:any = 0;
  totalPage: any = 0;
  @Output() pageIndexChange: EventEmitter<any> = new EventEmitter<any>();
  disable: any = {
    add: false,
    minus: false
  }

  constructor() { }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.totalPage = Math.ceil(this.total / this.size);
    this.totalPage > 0 && this.pageChange(1);
  }

  pageChange(val: any) {
    if (val == 'add' && this.currenIndex < this.totalPage) {
      this.currenIndex = this.currenIndex + 1
      this.pageIndexChange.emit(this.currenIndex)
    }

    if (val == 'minus' && this.currenIndex > 1) {
      this.currenIndex = this.currenIndex - 1
      this.pageIndexChange.emit(this.currenIndex)
    }

    if (val != 'add' && val != 'minus') {
      this.currenIndex = val
      this.pageIndexChange.emit(this.currenIndex);
    }
   this.disableNavigation()
  }

  disableNavigation() {
    this.disable.add = this.currenIndex == this.totalPage ? true : false;
    this.disable.minus = this.currenIndex == 1 ? true : false;
  }


}
