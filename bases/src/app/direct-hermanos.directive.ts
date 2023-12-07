import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectHermanos]'
})
export class DirectHermanosDirective {

  constructor( private element: ElementRef) {
    this.element.nativeElement.style.textTransform = 'capitalize';
   }

}
