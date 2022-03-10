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
  disable: any = {
    add: false,
    minus: false
  }
  initialIndexDisplay = true;


  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.totalPage = Math.ceil(this.total / this.size);
    this.totalPage > 0 && this.pageChange(1);
  }

  pageChange(val: any) {
    if (val == 'add' && this.currenIndex < this.totalPage) {
      this.currenIndex = this.currenIndex + 1;
      this.pageIndexChange.emit(this.currenIndex)
    }

    if (val == 'minus' && this.currenIndex > 1) {
      this.currenIndex = this.currenIndex - 1;
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

  counter(i: any) {
    return new Array(i);
  }

  responsive_pagination: any = {
    startValue: 0,
    endValue: 0,
    valueArr: [],
    endDisplay: true
  }

  paginationValueChange(val: any) {
    this.initialIndexDisplay = false;
    this.responsive_pagination.valueArr = []
    if (val == 'increment') {
      if (this.responsive_pagination.endValue > 0 && (this.responsive_pagination.endValue + 4) >= this.totalPage) {
        this.responsive_pagination.startValue = this.responsive_pagination.startValue + (this.totalPage - this.responsive_pagination.endValue);
        for (let i = 0; i < 5; i++) {
          if (i == 0) {
            this.responsive_pagination.valueArr.push(
              this.responsive_pagination.startValue
            )
          }
          if (i != 0) {
            this.responsive_pagination.valueArr.push(this.responsive_pagination.startValue + i)
          }
        }
        this.responsive_pagination.endValue = this.responsive_pagination.valueArr[this.responsive_pagination.valueArr.length - 1];
        this.responsive_pagination.endDisplay = false
      }
      else {
        if (this.totalPage > 10) {
          this.responsive_pagination.startValue = this.responsive_pagination.startValue + 5;
          for (let i = 0; i < 5; i++) {
            if (i == 0) {
              this.responsive_pagination.valueArr.push(
                this.responsive_pagination.startValue
              )
            }
            if (i != 0) {
              this.responsive_pagination.valueArr.push(this.responsive_pagination.startValue + i)
            }
          }
          this.responsive_pagination.endValue = this.responsive_pagination.valueArr[this.responsive_pagination.valueArr.length - 1]
        }
      }
    }

    if (val == 'decrement') {
      if (this.responsive_pagination.startValue == 5) {
        this.responsive_pagination.endDisplay = this.responsive_pagination.endDisplay == false ? true : this.responsive_pagination.endDisplay
        this.initialIndexDisplay = true;
        this.responsive_pagination.startValue = 0;
        this.responsive_pagination.endValue = 0;
      } else if (this.responsive_pagination.endDisplay == false) {
        this.responsive_pagination.endDisplay = this.responsive_pagination.endDisplay == false ? true : this.responsive_pagination.endDisplay
        this.responsive_pagination.startValue = this.responsive_pagination.startValue - ((this.responsive_pagination.startValue - 1) - (this.totalPage - this.responsive_pagination.startValue));
        for (let i = 0; i < 5; i++) {
          if (i == 0) {
            this.responsive_pagination.valueArr.push(
              this.responsive_pagination.startValue
            )
          }
          if (i != 0) {
            this.responsive_pagination.valueArr.push(this.responsive_pagination.startValue + i)
          }
        }
        this.responsive_pagination.endValue = this.responsive_pagination.valueArr[this.responsive_pagination.valueArr.length - 1];
      }
      else {
        this.responsive_pagination.endDisplay = this.responsive_pagination.endDisplay == false ? true : this.responsive_pagination.endDisplay
        if (this.totalPage > 10) {
          this.responsive_pagination.startValue = this.responsive_pagination.startValue - 5;
          for (let i = 0; i < 5; i++) {
            if (i == 0) {
              this.responsive_pagination.valueArr.push(
                this.responsive_pagination.startValue
              )
            }
            if (i != 0) {
              this.responsive_pagination.valueArr.push(this.responsive_pagination.startValue + i)
            }
          }
          this.responsive_pagination.endValue = this.responsive_pagination.valueArr[this.responsive_pagination.valueArr.length - 1]
        }
      }

    }
  }

}
