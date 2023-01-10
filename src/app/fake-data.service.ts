import { Injectable } from '@angular/core';
import {
  concat,
  interval,
  map,
  merge,
  mergeAll,
  Observable,
  of,
  scan,
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

  // Create an Observable that will start listening to geolocation updates
  // when a consumer subscribes.
  locations$ = new Observable<GeolocationPosition>(observer => {
    let watchId: number;

    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          const {
            latitude,
            longitude,
            altitude,
            altitudeAccuracy,
            accuracy,
            speed,
            heading,
          } = position.coords;
          observer.next({
            timestamp: position.timestamp,
            coords: {
              latitude,
              longitude,
              altitude,
              altitudeAccuracy,
              accuracy,
              speed,
              heading,
            },
          });
        },
        (error: GeolocationPositionError) => {
          observer.error(error);
        }
      );
    } else {
      observer.error('Geolocation not available');
    }

    // When the consumer unsubscribes, clean up data ready for next subscription.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      },
    };
  });

  tick$ = interval(1000);
  allTick$ = this.tick$.pipe(
    scan<number, number[]>((acc, value) => [...acc, value], [])
  );
}
