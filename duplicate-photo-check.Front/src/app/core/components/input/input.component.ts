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

    folderPath: string | null = null;

  onFolderSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      // Obtém apenas o nome da pasta sem os arquivos
      const firstFilePath = inputElement.files[0].webkitRelativePath;
      this.folderPath = firstFilePath.split('/')[0]; // Pegamos apenas o nome da pasta raiz
      console.log('Pasta Selecionada:', this.folderPath);
    }
  }
}