import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button-light-component',
    templateUrl: './button-light.component.html',
    styleUrls: ['./button-light.component.scss']
  })

export class ButtonLightComponent {
    @Input() name = "";
    @Input() type = "";
    @Input() disabled: boolean = false;
    @Output() public onClick: EventEmitter<void> = new EventEmitter();
}