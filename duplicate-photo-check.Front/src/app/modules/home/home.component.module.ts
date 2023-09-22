import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/core/components/button/button.component.module';
import { InputModule } from 'src/app/core/components/input/input.component.module';
import { SpinnerModule } from 'src/app/core/components/spinner/spinner.component.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
