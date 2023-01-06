import { Component, OnInit } from '@angular/core';

interface Animal {
  feed(): void;
}
class Puppy implements Animal {
  isAnimal() {
    return 'feed' in this;
  }
  feed(): void {
    console.log('omnomnom');
  }
}

export interface MyInterface {
  getName(): string | null;
}

export function isMyInterface(object: any): object is MyInterface {
  const myInterface = object as MyInterface;

  return myInterface.getName !== undefined;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  buksi = new Puppy();
  constructor() {}

  ngOnInit(): void {
    if (this.buksi.isAnimal()) {
      this.buksi.feed();
    } else console.error(`wau`);
  }
}
