import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxAirDatePickerCustomInput]',
})
export class CustomInputDirective {
  constructor(public templateRef: TemplateRef<unknown>) {
    console.log(this.templateRef);
  }
}
