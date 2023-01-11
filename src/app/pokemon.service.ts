import { Injectable } from '@angular/core';
import {
  MainClient,
  NamedAPIResource,
  NamedAPIResourceList,
} from 'pokenode-ts';
import { map, Observable, scan, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  client: MainClient;
  private offset = 0;
  private limit = 10;

  constructor() {
    this.client = new MainClient();
  }
  private pokemonsSubscriber: Subscriber<NamedAPIResourceList> | undefined;
  private pokemonStream$ = new Observable<NamedAPIResourceList>(subscriber => {
    this.pokemonsSubscriber = subscriber;
  });

  nextPokemons() {
    this.client.pokemon
      .listPokemons(this.offset, this.offset ? this.limit : 40)
      .then(result => {
        this.offset += this.limit;
        this.pokemonsSubscriber?.next(result);
      });
  }

  private mapPokemonList(value: NamedAPIResourceList) {
    return value.results;
  }

  listPokemons$() {
    return this.pokemonStream$.pipe(
      map<NamedAPIResourceList, NamedAPIResource[]>(this.mapPokemonList),
      scan<NamedAPIResource[], NamedAPIResource[]>(
        (acc, value) => [...acc, ...value],
        []
      )
    );
  }
}
