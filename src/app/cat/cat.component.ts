import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {
  catForm = new FormGroup({
    fooX: new FormControl(''),
    barX: new FormControl('barbarBAR'),
  });

  constructor() {}
  ngOnInit() {}

  catFormSubmitHandle() {
    console.info(this.catForm.value);
  }
}
