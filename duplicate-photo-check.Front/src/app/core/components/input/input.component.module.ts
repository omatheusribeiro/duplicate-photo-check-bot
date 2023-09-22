import { NgModule } from '@angular/core';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  exports:[InputComponent],
  bootstrap: [InputComponent]
})
export class InputModule { }
