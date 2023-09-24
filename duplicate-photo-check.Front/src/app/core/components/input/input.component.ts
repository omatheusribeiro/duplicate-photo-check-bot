import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true,
      },
    ],
  })

export class InputComponent {
    @Input() label = "";
    @Input() placeholder = "";
    @Input() type = "";
    @Input() control = new FormControl;
}