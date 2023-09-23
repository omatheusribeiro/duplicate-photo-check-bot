import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, noop, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormsModule, ReactiveFormsModule],
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

    formControl: FormControl = new FormControl<string>('');

    destroyRef: DestroyRef = inject(DestroyRef);

    onChange: (value: string) => void = noop;
    onTouch: () => void = noop;

    registerOnChange(fn: (value: string) => void): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
      this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
      isDisabled ? this.formControl.disable() : this.formControl.enable();
    }

    writeValue(value: string): void {
      this.formControl.setValue(value, { emitEvent: false });
    }

    ngOnInit(): void {
      this.formControl.valueChanges
        .pipe(
          debounceTime(200),
          tap(value => this.onChange(value)),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();
    }
}