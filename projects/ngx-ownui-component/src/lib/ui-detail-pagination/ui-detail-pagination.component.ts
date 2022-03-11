import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ui-detail-pagination',
  templateUrl: './ui-detail-pagination.component.html',
  styleUrls: ['./ui-detail-pagination.component.css']
})
export class UiDetailPaginationComponent implements OnInit {

  @Input() total: any = 0;
  @Input() size: any = 0;
  @Input() currenIndex: any = 0;
  totalPage: any = 0;
  @Output() pageIndexChange: EventEmitter<any> = new EventEmitter<any>();
  pageArr: any = [1, 2, 3, 4, 5];
  disable: any = {
    add: false,
    minus: false
  }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.totalPage = Math.ceil(this.total / this.size);
    this.totalPage > 10 && this.pageIndexSetChange(1);
    this.totalPage <= 10 && this.pageChange(1);
  }

  counter(i: any) {
    return new Array(i);
  }

  disableNavigation() {
    this.disable.add = this.currenIndex == this.totalPage ? true : false;
    this.disable.minus = this.currenIndex == 1 ? true : false;
  }


  pageIndexSetChange(val: any) {
    if (val == 'add' && this.currenIndex < this.totalPage) {
      this.currenIndex = this.currenIndex + 1;
      this.pageIndexChange.emit(this.currenIndex)
      if (this.currenIndex > this.pageArr[this.pageArr.length - 1]) {
        if ((this.totalPage - (this.currenIndex - 1)) > 8) {
          this.pageArr = this.pageArr.map((e: any) => e + 5)
        } else {
          this.pageArr = this.pageArr.map((e: any) => e + (this.totalPage - (this.currenIndex - 1)));
        }
      }
    }

    if (val == 'minus' && this.currenIndex > 1) {
      this.currenIndex = this.currenIndex - 1;
      this.pageIndexChange.emit(this.currenIndex);
      if (this.currenIndex < this.pageArr[0]) {
        if ((this.pageArr[0] - 1) > 5) {
          this.pageArr = this.pageArr.map((e: any) => e - 5);
        } else {
          this.pageArr = this.pageArr.map((e: any) => e - (this.pageArr[0] - 1))
        }
      }
    }


    if (val == 'decrement') {
      if ((this.pageArr[0] - 1) > 5) {
        this.pageArr = this.pageArr.map((e: any) => e - 5);
      } else {
        this.pageArr = this.pageArr.map((e: any) => e - (this.pageArr[0] - 1))
      }
    }

    if (val == 'increment') {
      if ((this.totalPage - (this.pageArr[this.pageArr.length - 1])) > 8) {
        this.pageArr = this.pageArr.map((e: any) => e + 5)
      } else {
        this.pageArr = this.pageArr.map((e: any) => e + (this.totalPage - (this.pageArr[this.pageArr.length - 1])));
      }
    }

    if (val != 'add' && val != 'minus') {
      this.currenIndex = val
      this.pageIndexChange.emit(this.currenIndex);
    }
    this.disableNavigation()
  }

  //Less than 10
  pageChange(val: any) {
    if (val == 'add' && this.currenIndex < this.totalPage) {
      this.currenIndex = this.currenIndex + 1;
      this.pageIndexChange.emit(this.currenIndex)
    }

    if (val == 'minus' && this.currenIndex > 1) {
      this.currenIndex = this.currenIndex - 1;
      this.pageIndexChange.emit(this.currenIndex);
    }

    if (val != 'add' && val != 'minus') {
      this.currenIndex = val
      this.pageIndexChange.emit(this.currenIndex);
    }
    this.disableNavigation()
  }

}
