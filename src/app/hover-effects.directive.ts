import { Directive, HostBinding, HostListener, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHoverEffects]'
})
export class HoverEffectsDirective {

  @Input('appHoverEffects') highlightColor: { background: string, text: string }

  @HostBinding('style.background-color') elemColor: string;

  constructor(public renderer: Renderer2, public elRef: ElementRef) { }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.elemColor = this.highlightColor.background;
  }

  @HostListener('mouseleave') mouseExit(eventData: Event) {
    this.elemColor = 'transparent'
  }
}
