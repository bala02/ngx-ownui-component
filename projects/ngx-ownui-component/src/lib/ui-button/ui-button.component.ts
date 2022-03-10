import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-button',
  template: `
      <div class="btn" [ngClass]="{'disable' : (disabled == true || load == true) }" (click)="onSubmitClick()" >
          <span>
              <ng-content></ng-content>
          </span>
      </div>
  `,
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Input() disabled:boolean | undefined;
  @Input() load:boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick(){
    if(!this.disabled && !this.load){
      this.submit.emit()
    }
  }

}
