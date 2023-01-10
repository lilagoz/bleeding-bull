import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  constructor(private ps: PokemonService) {}

  pokemons$ = this.ps.listPokemons$();

  ngOnInit() {
    this.ps.nextPokemons();
  }

  handleNext() {
    this.ps.nextPokemons();
  }

  onWindowScroll(event: any) {
    console.log(event);
  }
}
