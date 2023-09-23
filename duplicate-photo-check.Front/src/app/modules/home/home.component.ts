import { Component, EventEmitter } from "@angular/core";
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
      this.homeService.getProcess(this.form.value.sourceFolderPath, this.form.value.destinationFolderPath).subscribe((res :any) => {
        console.log(res);
      })
    }
    else{

    }
  }

  changeteste(event:any){
    debugger
    console.log(event)
  }
}