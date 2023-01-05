import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input-ex',
  templateUrl: './text-input-ex.component.html',
  styleUrls: ['./text-input-ex.component.scss'],
})
export class TextInputExComponent {
  @Input() label: string = '';
}
