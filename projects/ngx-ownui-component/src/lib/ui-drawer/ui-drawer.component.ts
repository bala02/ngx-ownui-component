import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ui-drawer',
  templateUrl: './ui-drawer.component.html',
  styleUrls: ['./ui-drawer.component.css']
})
export class UiDrawerComponent implements OnInit {

  @Input() closable: boolean = true;
  @Input() width: any = 200;
  @Input() visible: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.visible = false;
    this.onClose.emit();
  }

}
