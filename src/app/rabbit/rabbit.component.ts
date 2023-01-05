import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.scss'],
})
export class RabbitComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  // this form group was created by form builder
  rabbitForm = this.fb.group({
    foo: 'foo3',
    bar: ['bar3'], // there is no required validator BUT
    baz: ['baz3', [Validators.required]], // there is required
    quz: ['quz3', [Validators.required]], // there is required
  });
  rabbitFormSubmitHandle() {
    console.warn(this.rabbitForm.errors);
    console.info(this.rabbitForm.value);
  }
}
