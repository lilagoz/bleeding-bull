import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = '';
  @Input() formControl: FormControl | null = null;

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};
  get id() {
    return `${this.label}-TextInputComponent`;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    this.value = obj as string;
  }
  constructor() {}
  ngOnInit() {}

  changeHandle() {
    console.log(this.value);
    this.onChange(this.value);
  }
}
