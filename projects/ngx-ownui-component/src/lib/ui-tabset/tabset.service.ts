import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TabsetService {

  public tablist = new BehaviorSubject([])

  constructor() { }

  
  changeTabs(val:any) {
    this.tablist.next(val);
  }

  getTabs(){
    return this.tablist.asObservable();
  }
}
