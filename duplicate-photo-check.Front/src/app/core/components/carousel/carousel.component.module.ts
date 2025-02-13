import { NgModule } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CarouselComponent],
  bootstrap: [CarouselComponent]
})
export class CarouselModule { }
