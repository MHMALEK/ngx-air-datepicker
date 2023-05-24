import { Component } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { NgxAirDatepickerNoUIComponent } from '../datepicker.component'


@Component({
  selector: 'ngx-air-datepicker-range-custom-component',
  templateUrl: '../datepicker.component.html',
  styleUrls: ['../datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxAirDatepickerNoUIRangeComponent
    }
  ]
})
export class NgxAirDatepickerNoUIRangeComponent extends NgxAirDatepickerNoUIComponent {
  override isRange = true
}
