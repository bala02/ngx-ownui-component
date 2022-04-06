import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-ui-detail-pagination',
  templateUrl: './ui-detail-pagination.component.html',
  styleUrls: ['./ui-detail-pagination.component.css']
})
export class UiDetailPaginationComponent implements OnInit, AfterViewInit {

  @Input() total: any = 0;
  @Input() size: any = 0;
  @Input() pageIndex: any = 1;
  totalPage: any = 0;
  @Output() pageIndexChange: EventEmitter<any> = new EventEmitter<any>();
  element:any;

  ngOnInit(): void {
    this.totalPage = Math.ceil(this.total / this.size);
   }

  ngAfterViewInit(): void {
    if (this.totalPage > 10) {
      this.element = document.querySelector(".pagination_ul ul");
      this.totalPage > 10 && this.createPagination(this.totalPage, this.pageIndex)
    }
  }

  counter(i: any) {
    return new Array(i);
  }

  createPagination(totalPages:any, page:any) {
    this.element = document.querySelector(".pagination_ul ul")
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    let disable_li = 'li_disabled'
    if (page > 1) { //show the next button if the page value is greater than 1
      liTag += `<li class="btn prev" id="prevbtn" ><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }else{
      liTag += `<li class="btn prev ${disable_li}" id="prevbtn" ><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }

    if (page > 2) { //if page value is less than 2 then add 1 after the previous button
      liTag += `<li class="first numb" id="firstNumb"><span>1</span></li>`;
      if (page > 3) { //if page value is greater than 3 then add this (...) after the first li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    // how many pages or li show before the current li
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) { //if plength is greater than totalPage length then continue
        continue;
      }
      if (plength == 0) { //if plength is 0 than add +1 in plength value
        plength = plength + 1;
      }
      if (page == plength) { //if page is equal to plength than assign active string in the active variable
        active = "active";
      } else { //else leave empty to the active variable
        active = "";
      }
      liTag += `<li class="numb ${active} pageActive" ><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
      if (page < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" id="lastNumb" ><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
      liTag += `<li class="btn next" id="next" ><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }else{
      liTag += `<li class="btn next ${disable_li}" id="prevbtn" ><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }
    this.element.innerHTML = liTag; //add li tag inside ul tag;

    //Prev
    if (page > 1) {
      let myElement: HTMLElement | null = document.getElementById('prevbtn')
     myElement != null && myElement.addEventListener('click', () => {
        this.createPagination(totalPages, page - 1)
      });
    }

    //Next
    if (page < totalPages) {
      let myElement: HTMLElement | null = document.getElementById('next')
     myElement != null && myElement.addEventListener('click', () => {
        this.createPagination(totalPages, page + 1)
      });
    }

    //First page
    if (page > 2) {
      let myElement: HTMLElement | null =  document.getElementById('firstNumb')
      myElement != null && myElement.addEventListener('click', () => {
        this.createPagination(totalPages, 1)
      })
    }


    Array.from(document.getElementsByClassName('pageActive')).forEach((element:any) => {
      element.addEventListener('click', () => {
        this.createPagination(totalPages, (+element.firstChild.firstChild.nodeValue))
      })
    });


    //Last page
    if (page < totalPages - 1) {
      let myElement: HTMLElement | null =  document.getElementById('lastNumb')
      myElement != null && myElement.addEventListener('click', () => {
        this.createPagination(totalPages, totalPages)
      })
    }

    this.pageIndexChange.emit(page)
  }
  //Less than 10
  pageChange(val: any) {
    if (val == 'add' && this.pageIndex < this.totalPage) {
      this.pageIndex = this.pageIndex + 1;
      this.pageIndexChange.emit(this.pageIndex)
    }

    if (val == 'minus' && this.pageIndex > 1) {
      this.pageIndex = this.pageIndex - 1;
      this.pageIndexChange.emit(this.pageIndex);
    }

    if (val != 'add' && val != 'minus') {
      console.log(val)
      this.pageIndex = val
      this.pageIndexChange.emit(this.pageIndex);
    }
  }

}
