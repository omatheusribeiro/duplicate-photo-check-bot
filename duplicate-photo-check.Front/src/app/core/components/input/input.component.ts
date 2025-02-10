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

  // Abre o seletor de diretório ao clicar na div
  openFolderSelector() {
    this.folderInput.nativeElement.click();
  }

  // Obtém o nome da pasta selecionada
  onFolderSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.folderPath = inputElement.files[0].webkitRelativePath.split('/')[0];
      console.log('Pasta Selecionada:', this.folderPath);
    }
  }
}