import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports:[ButtonComponent],
  bootstrap: [ButtonComponent]
})
export class ButtonModule { }
