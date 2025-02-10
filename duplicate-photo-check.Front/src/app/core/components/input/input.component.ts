import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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

  @ViewChild('folderInput') folderInput!: ElementRef;
  folderPath: string | null = null;

  public showSpinner:boolean = false;

  // Open the directory selector when clicking on the div
  openFolderSelector() {
    this.folderInput.nativeElement.click();
  }

  onFolderSelected() {
    this.folderPath = this.control.value == "" ? null : this.control.value
  }
}