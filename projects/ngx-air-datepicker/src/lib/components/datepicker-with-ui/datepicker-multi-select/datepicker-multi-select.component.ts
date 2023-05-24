import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxAirDatepickerComponent } from '../datepicker.component';

/** @title Basic datepicker */
@Component({
  selector: 'ngx-air-datepicker-multi-select-component',
  templateUrl: '../datepicker.component.html',
  styleUrls: ['../datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxAirDatepickerMultiSelectComponent,
    },
  ],
})
export class NgxAirDatepickerMultiSelectComponent extends NgxAirDatepickerComponent {
  override isMultipleDateInput: number | boolean = true;
}
