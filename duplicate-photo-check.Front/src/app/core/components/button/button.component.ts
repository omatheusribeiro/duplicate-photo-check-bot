import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button-component',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
  })

export class ButtonComponent {
    @Input() name = "";
    @Input() type = "";
    @Output() public onClick: EventEmitter<void> = new EventEmitter();
}