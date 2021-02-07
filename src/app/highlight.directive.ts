import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @HostBinding('style.boxShadow') boxShadow: string;

  @HostListener('mouseover') onMouseOver() {
    const borderColor = window.getComputedStyle(this.element.nativeElement, null).getPropertyValue('border-color');
    const borderSize = '0 0 20px 0 ';
    this.element.nativeElement.style.boxShadow = borderSize.concat(borderColor);
  }

  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.style.boxShadow = 'none';
  }
}