import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCorDeFundo]'
})
export class CorDeFundoDirective {

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2 
  ) { 
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      '#8B4513'
    );
  }
  

}
