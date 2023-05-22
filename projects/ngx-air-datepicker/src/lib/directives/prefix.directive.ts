import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxAirDatePickerPrefix]',
})
export class NgxAirDatePickerPrefix {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
