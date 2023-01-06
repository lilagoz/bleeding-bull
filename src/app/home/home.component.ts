import { Component, OnInit } from '@angular/core';
import { FakeDataService } from '../fake-data.service';
import { Observable } from 'rxjs';

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
  data$: Observable<any> | undefined;
  buksi = new Puppy();
  constructor(private fake: FakeDataService) {}

  ngOnInit(): void {
    if (this.buksi.isAnimal()) {
      this.buksi.feed();
    } else console.error(`wau`);

    this.data$ = this.fake.getFooBar$();
  }
}
