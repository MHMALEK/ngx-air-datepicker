import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxAirDatepickerMultiSelectComponent } from './components/datepicker-multi-select/datepicker-multi-select.component';
import { NgxAirDatepickerDatepickerRangeComponent } from './components/datepicker-range/datepicker-range.component';
import { NgxAirDatepickerComponent } from './components/datepicker/datepicker.component';
import { CustomLabelDirective } from './directives/custom-label.directive';
import { NgxAirDatePickerPrefix } from './directives/prefix.directive';
import { NgxAirDatePickerApendix } from './directives/appendix.directive';
import { CustomIconDirective } from './directives/custom-icon.directive';

@NgModule({
  declarations: [
    NgxAirDatepickerComponent,
    NgxAirDatepickerDatepickerRangeComponent,
    NgxAirDatepickerMultiSelectComponent,
    CustomLabelDirective,
    NgxAirDatePickerApendix,
    NgxAirDatePickerPrefix,
    CustomIconDirective,
  ],
  imports: [CommonModule, FormsModule],

  exports: [
    NgxAirDatepickerComponent,
    NgxAirDatepickerDatepickerRangeComponent,
    NgxAirDatepickerMultiSelectComponent,
    CustomLabelDirective,
    NgxAirDatePickerApendix,
    NgxAirDatePickerPrefix,
    CustomIconDirective,
  ],
})
export class NgxAirDatepickerModule {}
