import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {
  catForm = new FormGroup({
    foo: new FormControl('foo'),
    bar: new FormControl('bar'),
  });

  constructor() {}
  ngOnInit() {}

  catFormSubmitHandle() {
    console.info(this.catForm.value);
  }
}
