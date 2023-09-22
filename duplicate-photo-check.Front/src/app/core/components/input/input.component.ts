import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
  })

export class InputComponent {
    @Input() label = "";
    @Input() placeholder = "";
    @Input() type = "";
}