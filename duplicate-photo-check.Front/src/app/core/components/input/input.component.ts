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

  onFolderSelected(event: Event) {
    this.showSpinner = true;
    const inputElement = event.target as HTMLInputElement;
    
    if (inputElement.files && inputElement.files.length > 0) {
      // Get the full path of the first file and remove the file name
      const fullPath = inputElement.files[0].webkitRelativePath;
      const folderPath = fullPath.substring(0, fullPath.lastIndexOf('/'));

      if(this.showSpinner){
        this.showSpinner = false;
      }
  
      this.folderPath = folderPath;
    }
  }
}