import { Component,  Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-ui-range-slider',
  templateUrl: './ui-range-slider.component.html',
  styleUrls: ['./ui-range-slider.component.css']
})
export class UiRangeSliderComponent implements OnInit {

  @Input() min: any = 0;
  @Input() max: any = 0;
  @Input() minValue: any = 0;
  @Input() maxValue: any = 0;
  @Input() stepSize: any = 1;
  @Output() values: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var parent:any = document.querySelectorAll(".range-slider");
    if (!parent) return;

    if(parent){
      parent.forEach((elm:any) => {
        let rangeS: any = elm.querySelectorAll("input[type=range]");
        rangeS.forEach((element:any) => {
          element.oninput = () => {
            var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);
            if (slide1 > slide2) {
              [slide1, slide2] = [slide2, slide1];
            }
            this.values.emit({
              min: slide1,
              max: slide2
            })
          }
        });
      });
    }

  }
}
