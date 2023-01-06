import { Injectable } from '@angular/core';
import {
  concat,
  map,
  merge,
  mergeAll,
  Observable,
  of,
  toArray,
  zipAll,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  constructor() {}

  public getFoo$ = () => of('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');

  public getBar$ = () => of('a', 'b', 'c', 'd', 'e', 'f');

  /*  public getFooMap$ = () => {
    return this.getFoo$().pipe(
      map((value, index) => value.map(value2 => `x${value2}`))
    );
  };*/

  public getFooBar$ = () => {
    // return of(this.getFoo$(), this.getBar$()).pipe(zipAll());
    return of(this.getFoo$(), this.getBar$()).pipe(zipAll()).pipe(toArray());
  };
}
