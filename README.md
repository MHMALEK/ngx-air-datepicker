
NgxAirDatepickerComponent
=========================

NgxAirDatepickerComponent and NgxAirDatepickerCustomComponent are two Angular components that provide datepicker functionality with different approaches to the user interface (UI).

## NgxAirDatepickerComponent

NgxAirDatepickerComponent is a UI component that includes pre-defined markup for the datepicker input, label, and other elements. It provides a ready-to-use datepicker interface with configurable options for customization. You can easily integrate NgxAirDatepickerComponent into your Angular templates and utilize its properties, events, and styling options to create a fully functional datepicker.

htmlCopy code

```<ngx-air-datepicker-component></ngx-air-datepicker-component>``` 

## ngx-air-datepicker-custom-component

ngx-air-datepicker-custom-component, on the other hand, is a non-UI component that allows you to provide your own custom markup for the datepicker input element. It gives you the flexibility to design and structure the input element according to your specific requirements. You can add the datepicker functionality by using the `ngxAirDatePickerInput` directive and surrounding it with the ngx-air-datepicker-custom-component.

htmlCopy code

```
<ngx-air-datepicker-custom-component>
  <input type="text" ngxAirDatePickerInput>
</ngx-air-datepicker-custom-component>
``` 

With ngx-air-datepicker-custom-component, you have complete control over the appearance and layout of the datepicker input, allowing seamless integration with your application's design.

## Choosing the Right Component

Choose the component that best suits your needs based on the desired level of control over the user interface. If you prefer a pre-designed UI with configurable options, NgxAirDatepickerComponent is the ideal choice. If you want complete control over the input markup, allowing for a more customized user experience, ngx-air-datepicker-custom-component is the recommended option.

Both components offer the same datepicker functionality and can be integrated into Angular Reactive Forms to handle form validation and data binding.

Consider your project's requirements and design preferences when selecting the appropriate component for your datepicker implementation.
NgxAirDatepickerComponent is an Angular component that provides a user-friendly datepicker interface. It is built using the AirDatepicker library and offers various configuration options and customization features.

Installation
------------

You can install NgxAirDatepickerComponent using npm:

bashCopy code

`npm install ngx-air-datepicker-component`

## Note: CSS Styling

To ensure the proper styling and appearance of the datepicker component, it is necessary to import the CSS styles provided by the AirDatepicker library. The NgxAirDatepickerComponent relies on these styles to create the visual elements of the datepicker.

To import the AirDatepicker CSS styles, you can refer to the documentation of the AirDatepicker library. It will guide you on how to include the necessary CSS files or import statements in your project.

Please note that the exact method of importing the CSS styles may vary depending on your project setup and build process. Ensure that you follow the appropriate instructions provided by the AirDatepicker library documentation to include the required styles.


Usage
-----

1.  Import the NgxAirDatepickerComponent module into your Angular module:

component:
```
import { NgxAirDatepickerModule } from 'ngx-air-datepicker-component';

@NgModule({
  imports: [
    NgxAirDatepickerModule,
    // other imports
  ],
  // other module configurations
})
export class YourModule { }
```
1.  Use the NgxAirDatepickerComponent in your component's template:

html
```
<ngx-air-datepicker-component></ngx-air-datepicker-component>
```

API
---

### Inputs

-   `label` (string): The label text for the datepicker.
-   `name` (string): The name attribute for the datepicker input element.
-   `placeholder` (string): The placeholder text for the datepicker input element.
-   `testID` (string): An optional ID for testing purposes.
-   `id` (string): The ID attribute for the datepicker input element.
-   `hasError` (boolean): Indicates whether the datepicker has an error state.
-   `parentClassList` (Record<string, boolean>): Additional CSS classes for the parent container element.
-   `inputClassList` (Record<string, boolean>): Additional CSS classes for the input element.
-   `labelClassList` (Record<string, boolean>): Additional CSS classes for the label element.
-   `airDatepickerConfig` (Partial<AirDatepickerOptions>): Configuration options for the underlying AirDatepicker library.
-   `readonlyInput` (boolean): Indicates whether the datepicker input is read-only.
-   `disabled` (boolean): Indicates whether the datepicker is disabled.

### Outputs

-   `getRawSelectedDates` (EventEmitter): Event emitted when the selected dates are retrieved.
-   `onInputClick` (EventEmitter): Event emitted when the input element is clicked.
-   `onInputFocus` (EventEmitter): Event emitted when the input element is focused.
-   `onInputBlur` (EventEmitter): Event emitted when the input element loses focus.
-   `onContainerClick` (EventEmitter): Event emitted when the datepicker container is clicked.
-   `getInputElementRef` (EventEmitter): Event emitted when the input element reference is obtained.
-   `getAirDatePickerInstance` (EventEmitter): Event emitted when the AirDatepicker instance is obtained.

### Methods

You do not have access or need to do anything to this methods as they're only for implementing the Angular form features. 

-   `writeValue(value: string | Date[]): void`: Writes a value to the datepicker input. Accepts a string or an array of Date objects.
-   `registerOnChange(fn: () => void): void`: Registers a callback function to be called when the value of the datepicker changes.
-   `registerOnTouched(fn: () => void): void`: Registers a callback function to be called when the datepicker input is touched.

Examples
--------

### Basic Usage

html

```
<ngx-air-datepicker-component
  label="Select a Date"
  placeholder="Choose a date">
 </ngx-air-datepicker-component>
```

### Customization

```
<ngx-air-datepicker-component
  label="Select a Date"
  placeholder="Choose a date"
  [parentClassList]="{ 'my-custom-container': true }"
  [inputClassList]="{ 'my-custom-input': true }"
  [labelClassList]="{ 'my-custom-label': true }"
>
></ngx-air-datepicker-component>
```

### Handling Events

htmlCopy code

```
<ngx-air-datepicker-component
  (onInputClick)="handleInputClick()"
  (onInputFocus)="handleInputFocus()"
  (onInputBlur)="handleInputBlur()"
  (onContainerClick)="handleContainerClick()"
  (getInputElementRef)="handleInputElementRef($event)"
  (getAirDatePickerInstance)="handleAirDatePickerInstance($event)"
>
></ngx-air-datepicker-component>
```

Note: This documentation assumes that you have already set up the necessary dependencies and imports required for using Angular and the AirDatepicker library in your project.

## Custom Label, Prefix, and Appendix Templates

NgxAirDatepickerComponent provides support for customizing the label, prefix, and appendix elements using `ng-template` and `ng-content` directives. These directives allow you to define your own custom markup for these elements and seamlessly integrate them with the datepicker component.

### Custom Label

To add a custom label to the NgxAirDatepickerComponent, you can use the `NgxAirDatePickerCustomLabelDirective` directive and define your label content within an `ng-template`:

htmlCopy code

```
<ngx-air-datepicker-component>
  <ng-template ngxAirDatePickerCustomLabel>
    <label class="custom-label">Custom Label:</label>
  </ng-template>
</ngx-air-datepicker-component>
``` 

In this example, the `ngxAirDatePickerCustomLabel` directive is used to provide a custom label. You can modify the `ng-template` content to suit your specific requirements, apply your own CSS classes, or include any desired markup.

### Custom Prefix

To add a custom prefix element before the input element of NgxAirDatepickerComponent, you can use the `NgxAirDatePickerPrefix` directive and include your prefix content using `ng-content`:

html

```<ngx-air-datepicker-component>
  <ng-template ngxAirDatePickerPrefix>
    <div class="custom-prefix">Prefix Content</div>
  </ng-template>
</ngx-air-datepicker-component>
```
 

In this example, the `ngxAirDatePickerPrefix` directive is used to provide a custom prefix. You can modify the `ng-template` content as needed, such as adding your own CSS classes or any other desired markup. The content within the `ng-template` will be inserted before the input element.

### Custom Appendix

To add a custom appendix element after the input element of NgxAirDatepickerComponent, you can use the `NgxAirDatePickerApendix` directive and include your appendix content using `ng-content`:

```
<ngx-air-datepicker-component>
  <ng-template ngxAirDatePickerApendix>
    <div class="custom-appendix">Appendix Content</div>
  </ng-template>
</ngx-air-datepicker-component>
``` 

In this example, the `ngxAirDatePickerApendix` directive is used to provide a custom appendix. You can modify the `ng-template` content as needed, such as adding your own CSS classes or any other desired markup. The content within the `ng-template` will be inserted after the input element.

By utilizing these `ng-template` directives, you have the flexibility to customize the label, prefix, and appendix elements of NgxAirDatepickerComponent according to your specific design and layout requirements.


## Integration with Angular Reactive Forms

NgxAirDatepickerComponent can be easily integrated with Angular Reactive Forms by implementing the ControlValueAccessor interface. This allows you to use the datepicker component within a reactive form and synchronize the selected date value with the form control.

Here's an example of how to use NgxAirDatepickerComponent with Angular Reactive Forms:

1.  Import the necessary Angular modules and NgxAirDatepickerComponent:

in your form component:

```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxAirDatepickerComponent } from 'ngx-air-datepicker-component';

@Component({
  selector: 'app-date-picker-form',
  template: `
    <form [formGroup]="dateForm">
      <ngx-air-datepicker-component
        formControlName="selectedDate"
        label="Select a Date"
        placeholder="Choose a date"
      ></ngx-air-datepicker-component>
    </form>
  `,
})
export class DatePickerFormComponent implements OnInit {
  dateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      selectedDate: [null], // Initialize with null or a default value
    });
  }
}
``` 

The ControlValueAccessor interface in NgxAirDatepickerComponent is already implemented, so you can bind the NgxAirDatepickerComponent to a form control using the `formControlName` attribute, and the selected date value will be automatically synchronized with the form control.


That's it! Now you can use NgxAirDatepickerComponent within your Angular Reactive Forms and handle the selected date value accordingly.


# NgxAirDatepickerCustomComponent

NgxAirDatepickerCustomComponent is a different component which give you exactly same  functionality but **without any predefined markup**. It allows you to use your own custom markup for the datepicker input element while still providing the datepicker functionality.

## Installation

same as before, You can install NgxAirDatepickerCustomComponent using npm:

```bash
npm install ngx-air-datepicker-component
```

## Usage

1. Import the NgxAirDatepickerCustomComponent module into your Angular module:

```typescript
import { NgxAirDatepickerModule } from 'ngx-air-datepicker-component';

@NgModule({
  imports: [
    NgxAirDatepickerModule,
    // other imports
  ],
  // other module configurations
})
export class YourModule { }
```

2. Use the NgxAirDatepickerCustomComponent in your component's template:

```html
<ngx-air-datepicker-custom-component></ngx-air-datepicker-custom-component>
```

3. Provide your own custom markup for the datepicker input element:

```html
<ngx-air-datepicker-custom-component>
  <input type="text" ngxAirDatePickerInput>
</ngx-air-datepicker-custom-component>
```

Note: Make sure to add the `ngxAirDatePickerInput` attribute to the input element that you want to associate with the datepicker functionality.

## API

The NgxAirDatepickerCustomComponent provides the same API as NgxAirDatepickerComponent. Please refer to the [NgxAirDatepickerComponent documentation](#ngxairdatepickercomponent-documentation) for detailed information about the inputs, outputs, and methods.

## Examples

### Basic Usage

```html
<ngx-air-datepicker-custom-component>
  <input type="text" ngxAirDatePickerInput>
</ngx-air-datepicker-custom-component>
```

### Customization

```html
<ngx-air-datepicker-custom-component>
  <input
    type="text"
    ngxAirDatePickerInput
    [placeholder]="'Choose a date'"
    [class]="'my-custom-input'"
  >
</ngx-air-datepicker-custom-component>
```

### Handling Events

```html
<ngx-air-datepicker-custom-component>
  <input
    type="text"
    ngxAirDatePickerInput
    (click)="handleInputClick()"
    (focus)="handleInputFocus()"
    (blur)="handleInputBlur()"
  >
</ngx-air-datepicker-custom-component>
```

## Integration with Angular Reactive Forms

NgxAirDatepickerCustomComponent can also be integrated with Angular Reactive Forms by implementing the ControlValueAccessor interface, similar to NgxAirDatepickerComponent. Please refer to the [Integration with Angular Reactive Forms section](#integration-with-angular-reactive-forms) in the NgxAirDatepickerComponent documentation for detailed instructions.

That's it! You can now use NgxAirDatepickerCustomComponent to add datepicker functionality to your custom input elements while providing your own markup.

## Feedback and Issues

We welcome any feedback or bug reports regarding NgxAirDatepickerComponent. If you have any suggestions, feature requests, or encounter any issues while using the component, please feel free to reach out to us.

### GitHub Repository

You can find the source code for NgxAirDatepickerComponent on our GitHub repository:

[NgxAirDatepickerComponent GitHub Repository](https://github.com/MHMALEK/ngx-air-datepicker/)

### Issue Tracker

If you encounter any issues or have specific bug reports, please submit them on our issue tracker:

[NgxAirDatepickerComponent Issue Tracker](https://github.com/MHMALEK/ngx-air-datepicker/issues)