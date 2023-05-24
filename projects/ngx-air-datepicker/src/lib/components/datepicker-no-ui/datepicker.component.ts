import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import AirDatepicker, { AirDatepickerOptions } from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';

export const ELEMENT_SELECTOR = 'ngxAirDatePickerInput';
@Component({
  selector: 'ngx-air-datepicker-custom-component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxAirDatepickerNoUIComponent,
    },
  ],
})
export class NgxAirDatepickerNoUIComponent implements ControlValueAccessor {
  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  // datepicker data
  selectedDates: Array<Date> | undefined = [];
  touched: boolean = false;
  dataPickerInstance: AirDatepicker | null = null;
  hostElement: any;
  input: HTMLInputElement | undefined;

  // error handler
  @Input() hasError: boolean = false;

  // airdatepicker config
  @Input() airDatepickerConfig: Partial<AirDatepickerOptions> = {};

  @Output() getRawSelectedDates = new EventEmitter();
  @Output() onInputClick = new EventEmitter();
  @Output() onInputFocus = new EventEmitter();
  @Output() onInputBlur = new EventEmitter();
  @Output() onContainerClick = new EventEmitter();
  @Output() getInputElementRef = new EventEmitter();
  @Output() getAirDatePickerInstance = new EventEmitter();

  // handle multiselect
  public isMultipleDateInput: number | boolean = false;

  // handle range
  public isRange: boolean = false;

  addDatePickerToInput() {
    if (this.checkAndAssignIfInputExist() && this.input) {
      const airDatepickerConfig: Partial<AirDatepickerOptions> = {
        // @ts-ignore
        locale: localeEn.default,
        multipleDates: this.isMultipleDateInput,
        onSelect: (event) => {
          this.onDateSelect(event);
        },
        range: this.isRange,
        ...this.airDatepickerConfig,
      };

      this.dataPickerInstance = new AirDatepicker(this.input, {
        ...airDatepickerConfig,
      });

      // pass the instance and element refrence to parent
      this.getInputElementRef.emit(this.input);
      this.getAirDatePickerInstance.emit(this.dataPickerInstance);
    } else {
      this.showError();
    }
  }

  showError(error?: Error) {
    throw new Error('Input did not found on element' + error);
  }

  checkAndAssignIfInputExist() {
    try {
      this.input = this.hostElement.querySelector(
        `[${ELEMENT_SELECTOR}]`
      );
    } catch (e: any) {
      this.showError(e);
    }

    return !!this.input;
  }

  ngAfterViewInit() {
    this.addDatePickerToInput();
  }

  public onDateSelect(data: {
    date: Date | Date[];
    formattedDate: string | string[];
    datepicker: AirDatepicker;
  }): void {
    this.selectedDates = data.date as Array<Date>;
    this.onChange(data);
    this.getRawSelectedDates.emit(this.selectedDates);
  }

  // Form value methods
  onChange = (value: any) => {};
  onTouched: () => void = () => {};
  writeValue(value: string | Date[]): void {
    if (this.dataPickerInstance) {
      // clear input UI as well
      this.dataPickerInstance.$el.value = value as string;
    }
    this.selectedDates = value as Array<Date>;
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
