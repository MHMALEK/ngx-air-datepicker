import {
  Component,
  ContentChild,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import AirDatepicker, { AirDatepickerOptions } from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';

import { NgxAirDatePickerApendix } from './directives/appendix.directive';
import { NgxAirDatePickerCustomLabelDirective } from './directives/custom-label.directive';
import { NgxAirDatePickerPrefix } from './directives/prefix.directive';

@Component({
  selector: 'ngx-air-datepicker-component',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgxAirDatepickerComponent,
    },
  ],
})
export class NgxAirDatepickerComponent implements ControlValueAccessor {
  @ViewChild('datepicker') private input: {
    nativeElement: HTMLInputElement;
  } | null = null;

  // datepicker data
  selectedDates: Array<Date> | undefined = [];
  touched: boolean = false;
  isDisabled: boolean = false;
  dataPickerInstance: AirDatepicker | null = null;

  // general inputs
  @Input() label: string = '';
  @Input() name: string = 'datepicker';
  @Input() placeholder: string = '';
  @Input() testID: string = 'NgxAirDatepickerComponent';
  @Input() id: string = 'ngx-datepicker';

  // error handler
  @Input() hasError: boolean = false;

  // CSS and UI
  @Input() parentClassList: Record<string, boolean> | undefined = {};
  @Input() inputClassList: Record<string, boolean> = {};
  @Input() labelClassList: Record<string, boolean> = {};

  // airdatepicker config
  @Input() airDatepickerConfig: Partial<AirDatepickerOptions> = {};

  // custom  label
  @ContentChild(NgxAirDatePickerCustomLabelDirective)
  labelCustom!: NgxAirDatePickerCustomLabelDirective;
  // custom prefix
  @ContentChild(NgxAirDatePickerPrefix) prefixCustom!: NgxAirDatePickerPrefix;
  // custom appendix
  @ContentChild(NgxAirDatePickerApendix)
  appendixCustom!: NgxAirDatePickerApendix;

  @Output() getRawSelectedDates = new EventEmitter();
  @Output() onInputClick = new EventEmitter();
  @Output() onInputFocus = new EventEmitter();
  @Output() onInputBlur = new EventEmitter();
  @Output() onContainerClick = new EventEmitter();
  @Output() getInputElementRef = new EventEmitter();
  @Output() getAirDatePickerInstance = new EventEmitter();

  @Input() readonlyInput: boolean = false;
  @Input() disabled: boolean = this.isDisabled;

  // handle multiselect
  public isMultipleDateInput: number | boolean = false;

  // handle range
  public isRange: boolean = false;

  get inputClasses() {
    return {
      ...this.inputClassList,
      'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500':
        true,
      'ngx-airdatepicker-input--default': !this.hasError,
      'ngx-airdatepicker-input--error': this.hasError && this.touched,
    };
  }

  get parentClasses() {
    return {
      ...this.parentClassList,
      'ngx-airdatepicker-container--default': !this.hasError,
      'ngx-airdatepicker-container--error': this.hasError && this.touched,
    };
  }

  get labelClasses() {
    return {
      ...this.labelClassList,
      'block mb-2 text-sm font-medium text-gray-900 dark:text-white': true,
      'ngx-airdatepicker-label--default': !this.hasError,
      'ngx-airdatepicker-label--error': this.hasError && this.touched,
    };
  }

  addDatePickerToInput() {
    if (this.checkIfInputExist() && this.input) {
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

      this.dataPickerInstance = new AirDatepicker(this.input.nativeElement, {
        ...airDatepickerConfig,
      });

      // pass the instance and element refrence to parent
      this.getInputElementRef.emit(this.input);
      this.getAirDatePickerInstance.emit(this.dataPickerInstance);
    } else {
      this.showError();
    }
  }

  showError() {
    throw new Error('Input did not found on element');
  }

  checkIfInputExist() {
    return !!this.input;
  }

  ngAfterViewInit() {
    console.log(this.labelCustom.templateRef);
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

  // methods output
  _onInputClick($event: MouseEvent) {
    this.onInputClick.emit($event);
  }
  _onInputFocus($event: FocusEvent) {
    this.onInputFocus.emit($event);
  }
  _onInputBlur($event: FocusEvent) {
    this.touched = true;
    this.onTouched();
    this.onInputBlur.emit($event);
  }
  _onContainerClick($event: MouseEvent) {
    this.onContainerClick.emit($event);
  }
}
