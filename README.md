# NgxAirDatepickerComponent

NgxAirDatepickerComponent is an Angular component that provides a user-friendly datepicker interface. It is built using the AirDatepicker library and offers various configuration options and customization features.

## Installation

You can install NgxAirDatepickerComponent using npm:

bashCopy code

`npm install ngx-air-datepicker-component`

## Usage

1.  Import the NgxAirDatepickerComponent module into your Angular module:

typescriptCopy code

`import { NgxAirDatepickerModule } from 'ngx-air-datepicker-component';

@NgModule({
imports: [
NgxAirDatepickerModule,
// other imports
],
// other module configurations
})
export class YourModule { }`

1.  Use the NgxAirDatepickerComponent in your component's template:

htmlCopy code

`<ngx-air-datepicker-component></ngx-air-datepicker-component>`

## API

### Inputs

- `label` (string): The label text for the datepicker.
- `name` (string): The name attribute for the datepicker input element.
- `placeholder` (string): The placeholder text for the datepicker input element.
- `testID` (string): An optional ID for testing purposes.
- `id` (string): The ID attribute for the datepicker input element.
- `hasError` (boolean): Indicates whether the datepicker has an error state.
- `parentClassList` (Record<string, boolean>): Additional CSS classes for the parent container element.
- `inputClassList` (Record<string, boolean>): Additional CSS classes for the input element.
- `labelClassList` (Record<string, boolean>): Additional CSS classes for the label element.
- `airDatepickerConfig` (Partial<AirDatepickerOptions>): Configuration options for the underlying AirDatepicker library.
- `readonlyInput` (boolean): Indicates whether the datepicker input is read-only.
- `disabled` (boolean): Indicates whether the datepicker is disabled.

### Outputs

- `getRawSelectedDates` (EventEmitter): Event emitted when the selected dates are retrieved.
- `onInputClick` (EventEmitter): Event emitted when the input element is clicked.
- `onInputFocus` (EventEmitter): Event emitted when the input element is focused.
- `onInputBlur` (EventEmitter): Event emitted when the input element loses focus.
- `onContainerClick` (EventEmitter): Event emitted when the datepicker container is clicked.
- `getInputElementRef` (EventEmitter): Event emitted when the input element reference is obtained.
- `getAirDatePickerInstance` (EventEmitter): Event emitted when the AirDatepicker instance is obtained.

### Methods

- `writeValue(value: string | Date[]): void`: Writes a value to the datepicker input. Accepts a string or an array of Date objects.
- `registerOnChange(fn: () => void): void`: Registers a callback function to be called when the value of the datepicker changes.
- `registerOnTouched(fn: () => void): void`: Registers a callback function to be called when the datepicker input is touched.

## Examples

### Basic Usage

htmlCopy code

`<ngx-air-datepicker-component
label="Select a Date"
placeholder="Choose a date"

> </ngx-air-datepicker-component>`

### Customization

htmlCopy code

`<ngx-air-datepicker-component
label="Select a Date"
placeholder="Choose a date"
[parentClassList]="{ 'my-custom-container': true }"
[inputClassList]="{ 'my-custom-input': true }"
[labelClassList]="{ 'my-custom-label': true }"

> </ngx-air-datepicker-component>`

### Handling Events

htmlCopy code

`<ngx-air-datepicker-component
(onInputClick)="handleInputClick()"
(onInputFocus)="handleInputFocus()"
(onInputBlur)="handleInputBlur()"
(onContainerClick)="handleContainerClick()"
(getInputElementRef)="handleInputElementRef($event)"
  (getAirDatePickerInstance)="handleAirDatePickerInstance($event)"

> </ngx-air-datepicker-component>`

Note: This documentation assumes that you have already set up the necessary dependencies and imports required for using Angular and the AirDatepicker library in your project.
