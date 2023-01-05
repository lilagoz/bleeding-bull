import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.scss'],
})
export class RabbitComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  onlyTheGoat(control: AbstractControl): ValidationErrors | null {
    console.log('onlyTheGoat', control);
    return control.value === 'goat' ? null : { onlyTheGoat: true };
  }

  // this form group was created by form builder
  rabbitForm = this.fb.group({
    foo: '',
    bar: [''], // there is no required validator BUT
    baz: ['', [Validators.required, this.onlyTheGoat]], // there is required
  });
  rabbitFormSubmitHandle() {
    console.warn(this.rabbitForm.errors);
    console.info(this.rabbitForm.value);
  }
}
