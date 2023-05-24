import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgxAirDatepickerComponent } from '../datepicker.component';

@Component({
  selector: 'ngx-air-datepicker-range-component',
  templateUrl: '../datepicker.component.html',
  styleUrls: ['../datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxAirDatepickerDatepickerRangeComponent,
    },
  ],
})
export class NgxAirDatepickerDatepickerRangeComponent extends NgxAirDatepickerComponent {
  override isRange = true;
}
