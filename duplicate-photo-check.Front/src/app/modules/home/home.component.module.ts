import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/core/components/button/button.component.module';
import { InputModule } from 'src/app/core/components/input/input.component.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
