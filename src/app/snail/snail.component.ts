import { Component } from '@angular/core';

@Component({
  selector: 'app-snail',
  templateUrl: './snail.component.html',
  styleUrls: ['./snail.component.scss'],
})
export class SnailComponent {
  data = {
    foo: '',
    bar: '',
  };
  snailFormSubmitHandle() {
    console.log('sendData', this.data);
  }
}
