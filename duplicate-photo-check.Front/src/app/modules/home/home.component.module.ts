import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/core/components/button/button.component.module';
import { ButtonLightModule } from 'src/app/core/components/button-light/button-light.component.module';
import { InputModule } from 'src/app/core/components/input/input.component.module';
import { SpinnerModule } from 'src/app/core/components/spinner/spinner.component.module';
import { AlertModule } from 'src/app/core/components/alert/alert.component.module';
import { CarouselModule } from 'src/app/core/components/carousel/carousel.component.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputModule,
    SpinnerModule,
    AlertModule,
    ButtonLightModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
