import { Component, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { UiTabComponent } from '../ui-tab/ui-tab.component';
import { TabsetService } from './tabset.service';

@Component({
  selector: 'lib-ui-tabset',
  templateUrl: './ui-tabset.component.html',
  styleUrls: ['./ui-tabset.component.css']
})
export class UiTabsetComponent implements OnInit, AfterContentInit {

  isOpen = false;
  @ContentChildren(UiTabComponent) tabs: QueryList<UiTabComponent> | undefined;
  tabList: any = []
  @Output() selectedTab: EventEmitter<any> = new EventEmitter()
  selectedId: any = 0;
  tempTabList: any = []

  constructor(
    private tabService:TabsetService
  ) {
  }

  ngAfterContentInit(): void {
    this.tempTabList = this.tabs;
    (this.tabs && this.tabs.length > 0) && this.tempTabList._results.forEach((element:any) => {
      this.tabList.push({
        id: element.id,
        title: element.title
      })
    });
    this.tabService.changeTabs(this.tabList)
    this.selectTab(this.selectedId)
  }

  ngOnInit(): void {
  }

  selectTab(id: any) {
    this.selectedId = id
    this.selectedTab.emit(this.selectedId);
    this.tempTabList.forEach((element:any, ind:number) => {
      if (id != ind) {
        element.isSelected = false;
      }
      if (id === ind) {
        element.isSelected = true;
      }
    });
  }


}
