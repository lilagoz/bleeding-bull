import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FakeDataService } from '../fake-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data$: Observable<any> | undefined;
  constructor() {}

  ngOnInit(): void {}
}
