import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxAirDatePickerCustomIcon]',
})
export class CustomIconDirective {
  constructor(public templateRef: TemplateRef<unknown>) {
    console.log(this.templateRef.elementRef.nativeElement);
  }
}
