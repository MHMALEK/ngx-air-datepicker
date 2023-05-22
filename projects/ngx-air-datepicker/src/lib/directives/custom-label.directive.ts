import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxAirDatePickerCustomLabel]',
})
export class CustomLabelDirective {
  constructor(public templateRef: TemplateRef<unknown>, el: ElementRef) {}
}
