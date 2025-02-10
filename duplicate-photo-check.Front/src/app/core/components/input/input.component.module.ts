import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '../spinner/spinner.component.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SpinnerModule,
  ],
  exports:[InputComponent],
  bootstrap: [InputComponent]
})
export class InputModule { }
