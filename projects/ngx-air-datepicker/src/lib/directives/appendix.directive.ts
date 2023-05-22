import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxAirDatePickerApendix]',
})
export class NgxAirDatePickerApendix {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
