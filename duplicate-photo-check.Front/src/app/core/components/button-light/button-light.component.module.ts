import { NgModule } from '@angular/core';

import { ButtonLightComponent } from './button-light.component';

@NgModule({
  declarations: [
    ButtonLightComponent
  ],
  exports:[ButtonLightComponent],
  bootstrap: [ButtonLightComponent]
})
export class ButtonLightModule { }
