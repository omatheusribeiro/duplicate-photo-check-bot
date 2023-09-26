import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-alert-component',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
  })

export class AlertComponent {
    @Input() class = "";
    @Input() text = "";
}