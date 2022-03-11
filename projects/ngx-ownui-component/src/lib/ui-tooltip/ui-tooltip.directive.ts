import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[libUiTooltip]'
})
export class UiTooltipDirective {

  tooltipElement = document.createElement('div');
   
    @Input() message:any
    @Input() event:any = 'mouseover';

    hide() {
      this.tooltipElement.classList.remove('tooltip--active');
    }

    @HostListener('mouseenter') onMouseEnter() {
      if(this.event == 'mouseover'){
        this.tooltipElement.textContent = this.message;
        this.tooltipElement.classList.add('tooltip--active');
      }
    }
    @HostListener('click') onClick() {
      if(this.event == 'click'){
        this.tooltipElement.textContent = this.message;
        this.tooltipElement.classList.add('tooltip--active');
      }
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.hide()
    }
    constructor(private element:ElementRef) {
    }

    ngOnInit() {
      this.tooltipElement.className = 'tooltip';
      this.element.nativeElement.appendChild(this.tooltipElement);
      this.element.nativeElement.classList.add('tooltip-container');
    }

}
