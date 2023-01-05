import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
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
    return control.value === 'goat' ? null : { onlyTheGoat: true };
  }

  somewhereACat(control: AbstractControl<any, any>): ValidationErrors | null {
    const group = control as FormGroup;
    console.log('somewhereACat', group);
    const foundACat = Object.entries(group.controls).find(([id, control]) => {
      console.log(id, control);
      return control.value === 'cat';
    });
    return foundACat ? null : { somewhereACat: true };
  }

  // this form group was created by form builder
  rabbitForm = this.fb.group(
    {
      foo: '',
      bar: [''], // there is no required validator BUT
      baz: ['', [Validators.required, this.onlyTheGoat]], // there is required
    },
    { validators: [this.somewhereACat] }
  );
  rabbitFormSubmitHandle() {
    console.warn(this.rabbitForm.errors);
    console.info(this.rabbitForm.value);
  }
}
