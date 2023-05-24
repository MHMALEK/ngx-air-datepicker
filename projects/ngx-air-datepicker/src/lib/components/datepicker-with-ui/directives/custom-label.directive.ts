import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxAirDatePickerCustomLabel]',
})
export class NgxAirDatePickerCustomLabelDirective {
  constructor(public templateRef: TemplateRef<unknown>, el: ElementRef) {}
}
