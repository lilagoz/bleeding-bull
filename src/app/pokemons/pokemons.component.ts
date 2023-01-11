import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ScrollService } from '../scroll.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  @ViewChild('nextButton') nextButton: ElementRef | undefined;
  scrollY$: Observable<number>;
  pokemons$ = this.ps.listPokemons$();

  constructor(private ps: PokemonService, private scroll: ScrollService) {
    this.scrollY$ = this.scroll.scrollY$;
  }

  // @HostListener('window:scroll', ['$event.target']) onScroll(
  //   e: HTMLElement
  // ): void {
  //   if (e) {
  //     const scrollTop = e.scrollTop;
  //     this.scroll.scrollY.next(scrollTop);
  //   }
  // }

  ngOnInit() {
    this.ps.nextPokemons();
    this.scroll.scrollY$.subscribe(ez => {
      console.log('scroll position', ez);
    });
  }

  handleNext() {
    this.ps.nextPokemons();
  }

  onWindowScroll(event: any) {
    const { scrollTop, clientHeight } = event.target.documentElement;
    const { offsetHeight } = event.target.body;
    const foo = scrollTop + clientHeight;
    if (foo + 60 > offsetHeight) {
      this.ps.nextPokemons();
    }
  }
}
