import { NgModule } from '@angular/core';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  exports:[CarouselComponent],
  bootstrap: [CarouselComponent]
})
export class CarouselModule { }
