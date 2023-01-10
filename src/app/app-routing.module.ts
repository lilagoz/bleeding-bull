import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { SnailComponent } from './snail/snail.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'snail', component: SnailComponent },
  { path: 'cat', component: CatComponent },
  { path: 'dog', component: DogComponent },
  { path: 'rabbit', component: RabbitComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
