import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[InputComponent],
  bootstrap: [InputComponent]
})
export class InputModule { }
