import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import AirDatepicker, { AirDatepickerOptions } from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';

import { NgxAirDatePickerApendix } from '../../directives/appendix.directive';
import { CustomInputDirective } from '../../directives/custom-input.directive';
import { CustomLabelDirective } from '../../directives/custom-label.directive';
import { NgxAirDatePickerPrefix } from '../../directives/prefix.directive';

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
export class NgxAirDatepickerComponent
  implements ControlValueAccessor, AfterContentInit, AfterViewChecked
{
  ngAfterViewChecked(): void {}
  @ViewChild('datepicker') input: { nativeElement: HTMLInputElement } | null =
    null;
  @Input() maxNumberOfPossibleSelections: number | null = null;
  @Input() label: string = '';
  @Input() icon: string = 'event';
  @Input() dateFormat: string = 'yyyy-MM-dd';
  @Input() error: any;
  @Input() multipleDatesSeparator: string = ' | ';

  @Input() name: string = 'datepicker';
  @Input() placeholder: string = '';

  // events
  @Input() isMultipleDateInput: boolean | number =
    this.maxNumberOfPossibleSelections || false;

  @Input() testID: string = 'NgxAirDatepickerComponent';
  @Input() id: string = 'ngx-datepicker';

  // CSS and UI
  @Input() parentClassList: Record<string, boolean> | undefined = {};
  @Input() inputClassList: Record<string, boolean> = {};

  // airdatepicker config
  @Input() airDatepickerConfig: Partial<AirDatepickerOptions> = {};

  // custom input
  @ContentChild(CustomInputDirective) inputCustom!: CustomInputDirective;
  // handle  label
  @ContentChild(CustomLabelDirective) labelContent!: CustomLabelDirective;
  // custom prefix
  @ContentChild(NgxAirDatePickerPrefix) prefix!: NgxAirDatePickerPrefix;
  // custom appendix
  @ContentChild(NgxAirDatePickerApendix) appendix!: NgxAirDatePickerApendix;

  @Output() getRawSelectedDates = new EventEmitter();
  @Output() onInputClick = new EventEmitter();
  @Output() onInputFocus = new EventEmitter();
  @Output() onInputBlur = new EventEmitter();

  @Output() onContainerClick = new EventEmitter();

  @Output() getInputElementRef = new EventEmitter();
  @Output() getAirDatePickerInstance = new EventEmitter();

  // @ViewChild('myTemplate') myTemplate: any;
  @ContentChild('myTemplate', { read: ViewContainerRef }) myTemplate:
    | TemplateRef<unknown>
    | undefined;
  ngAfterContentInit() {
    // console.log(this.inputCustom);
    // console.log('asdsad');
    // console.log(
    //   '2',I
    //   this.inputCustom.templateRef.elementRef.nativeElement.querySelector(
    //     'input'
    //   )
    // );
    // const elementInsideTemplate =
    // this.myTemplate.nativeElement.querySelector('#myElement');
    // console.log(elementInsideTemplate); // You can now access and manipulate the element

    console.log('2', this.myTemplate?.elementRef.nativeElement);
    // this.myTemplate?.elementRef.nativeElement.querySelector('#myElement');
  }

  selectedDates: Array<Date> | undefined = [];
  touched: boolean = false;
  isDisabled: boolean = false;
  isRange: boolean = false;

  @Input() readonlyInput: boolean = false;
  @Input() disabled: boolean = this.isDisabled;

  dataPickerInstance: AirDatepicker | null = null;

  get inputClasses() {
    return {
      ...this.inputClassList,
      'ngx-airdatepicker-input--default': !this.error,
      'ngx-airdatepicker-input--error': this.error && this.touched,
    };
  }

  get parentClasses() {
    return {
      ...this.parentClassList,
      'ngx-airdatepicker-container--default': !this.error,
      'ngx-airdatepicker-container--error': this.error && this.touched,
    };
  }

  ngAfterViewInit() {
    let _self = this;

    if (this.input) {
      this.dataPickerInstance = new AirDatepicker(
        this.inputCustom.templateRef.elementRef.nativeElement,
        {
          multipleDatesSeparator: this.multipleDatesSeparator,
          dateFormat: this.dateFormat,
          multipleDates: this.isMultipleDateInput,
          range: this.isRange,
          // @ts-ignore
          locale: localeEn.default,
          onHide: () => {},
          onSelect: (event) => {
            _self.onDateSelect(event);
          },
          ...this.airDatepickerConfig,
        }
      );
      this.getInputElementRef.emit(this.input);
      this.getAirDatePickerInstance.emit(this.dataPickerInstance);
    }
  }

  public init = new Date();
  public datesList: Array<Date> = [];
  @Output() onDatesListChangeEvent = new EventEmitter();

  public onDateSelect(data: {
    date: Date | Date[];
    formattedDate: string | string[];
    datepicker: AirDatepicker;
  }): void {
    this.selectedDates = data.date as Array<Date>;
    this.onChange(data.formattedDate);
    this.getRawSelectedDates.emit(this.selectedDates);
  }

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

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

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
