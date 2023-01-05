import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FourOFourComponent,
    CatComponent,
    DogComponent,
    RabbitComponent,
    TextInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
