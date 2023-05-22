import { Component } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgxAirDatepickerComponent } from '../datepicker/datepicker.component';

/** @title Basic datepicker */
@Component({
  selector: 'ngx-air-datepicker-multi-select-component',
  templateUrl: '../datepicker/datepicker.component.html',
  styleUrls: ['../datepicker/datepicker.component.scss'],
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
