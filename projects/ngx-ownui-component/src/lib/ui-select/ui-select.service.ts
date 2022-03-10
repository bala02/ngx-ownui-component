import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiSelectService {

  public selectedOption = new BehaviorSubject(null);
  public searchResult = new BehaviorSubject(null);

  constructor() { }

  changeOption(val:any) {
    this.selectedOption.next(val);
  }

  getOption(){
    return this.selectedOption.asObservable();
  }
}
