import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
})
export class DogComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  // this form group was created by form builder
  dogForm = this.fb.group({
    foo: 'foo23',
    bar: ['ez itt '], // there is no required validator BUT
    baz: ['', [Validators.required]], // there is required
  });
  dogFormSubmitHandle() {
    console.warn(this.dogForm.errors);
    console.info(this.dogForm.value);
  }
}
