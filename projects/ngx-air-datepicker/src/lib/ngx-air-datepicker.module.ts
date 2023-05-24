import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxAirDatepickerNoUIMultiSelectComponent } from './components/datepicker-no-ui/datepicker-multi-select/datepicker-multi-select.component';
import { NgxAirDatepickerNoUIRangeComponent } from './components/datepicker-no-ui/datepicker-range/datepicker-range.component';
import { NgxAirDatepickerNoUIComponent } from './components/datepicker-no-ui/datepicker.component';

import { NgxAirDatepickerComponent } from './components/datepicker-with-ui/datepicker.component';
import { NgxAirDatepickerMultiSelectComponent } from './components/datepicker-with-ui/datepicker-multi-select/datepicker-multi-select.component';
import { NgxAirDatepickerDatepickerRangeComponent } from './components/datepicker-with-ui/datepicker-range/datepicker-range.component';

import { NgxAirDatePickerPrefix } from './components/datepicker-with-ui/directives/prefix.directive';
import { NgxAirDatePickerApendix } from './components/datepicker-with-ui/directives/appendix.directive';
import { NgxAirDatePickerCustomLabelDirective } from './components/datepicker-with-ui/directives/custom-label.directive';

@NgModule({
  declarations: [
    // with no UI - only Angular wrapper
    NgxAirDatepickerNoUIComponent,
    NgxAirDatepickerNoUIMultiSelectComponent,
    NgxAirDatepickerNoUIRangeComponent,

    // with UI
    NgxAirDatepickerComponent,
    NgxAirDatepickerDatepickerRangeComponent,
    NgxAirDatepickerMultiSelectComponent,

    // directives for UI
    NgxAirDatePickerPrefix,
    NgxAirDatePickerApendix,
    NgxAirDatePickerCustomLabelDirective,
  ],
  imports: [CommonModule, FormsModule],

  exports: [
    // with no UI - only Angular wrapper
    NgxAirDatepickerNoUIComponent,
    NgxAirDatepickerNoUIMultiSelectComponent,
    NgxAirDatepickerNoUIRangeComponent,

    // with UI
    NgxAirDatepickerComponent,
    NgxAirDatepickerDatepickerRangeComponent,
    NgxAirDatepickerMultiSelectComponent,

    // directives for UI
    NgxAirDatePickerPrefix,
    NgxAirDatePickerApendix,
    NgxAirDatePickerCustomLabelDirective,
  ],
})
export class NgxAirDatepickerModule {}
