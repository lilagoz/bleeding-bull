import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollY = new BehaviorSubject(0);
  scrollY$ = this.scrollY.asObservable();

  updateScrollY(value: number): void {
    this.scrollY.next(value);
  }
}
