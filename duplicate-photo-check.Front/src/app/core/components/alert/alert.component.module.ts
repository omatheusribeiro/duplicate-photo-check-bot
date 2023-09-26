import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  exports:[AlertComponent],
  bootstrap: [AlertComponent]
})
export class AlertModule { }
