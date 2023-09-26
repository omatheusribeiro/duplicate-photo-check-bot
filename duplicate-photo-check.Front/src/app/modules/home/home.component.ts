import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HomeService } from "./services/home.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })

export class HomeComponent{

  public showSpinner:boolean = false;
  public inputSliderValue:any = "";

  public form = new FormGroup({
    sourceFolderPath: new FormControl('', [Validators.required]),
    destinationFolderPath: new FormControl('', [Validators.required])
  });

  constructor(public homeService: HomeService){}

  separatePhotos(){
    if(this.form.valid){
      this.showSpinner = true;
      this.homeService.getProcess(this.form.value.sourceFolderPath, this.form.value.destinationFolderPath).subscribe((res :any) => {
        setTimeout(() => { 
          this.showSpinner = false; 
          this.form.get('sourceFolderPath')?.setValue("");
          this.form.get('destinationFolderPath')?.setValue("");
        },3000);
      },
      error =>{
        this.showSpinner = false;
        console.log(error);
      })
    }
    else{

    }
  }
}