import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiAccordionService {

  public accordionId = new BehaviorSubject(null)

  constructor() { }

  changeAccordionId(val:any) {
    this.accordionId.next(val);
  }

  getAccordionId(){
    return this.accordionId.asObservable();
  }

}
