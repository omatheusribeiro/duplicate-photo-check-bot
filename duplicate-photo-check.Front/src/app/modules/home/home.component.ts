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
  public classAlert:string = "";
  public textAlert:string = "";
  public showAlert:boolean = false;

  public form = new FormGroup({
    sourceFolderPath: new FormControl('', [Validators.required])
  });

  constructor(public homeService: HomeService){}

  separatePhotos(){
    this.showAlert = false; 
    if(this.form.valid){
      this.showSpinner = true;
      this.homeService.getProcess(this.form.value.sourceFolderPath).subscribe((res :any) => {
        setTimeout(() => { 
          this.showSpinner = false; 
          this.form.get('sourceFolderPath')?.setValue("");
        },2000);

        this.showAlert = true;
        this.classAlert = "alert alert-success";
        this.textAlert = res.message + "The duplicate photos have been moved to the following directory: 📂 " + res.response;

        setTimeout(() => { 
          this.showAlert = false; 
          this.classAlert = "";
          this.classAlert = "";
        },8000);

      },
      error =>{
        this.showSpinner = false;

        this.showAlert = true;
        this.classAlert = "alert alert-danger";
        this.textAlert = error.message;

        setTimeout(() => { 
          this.showAlert = false; 
          this.classAlert = "";
          this.classAlert = "";
        },5000);
      })
    }
    else{
      this.showAlert = true;
      this.classAlert = "alert alert-warning";
      this.textAlert = "You need to fill in the fields on the form so that we can separate the duplicate photos.";

      setTimeout(() => { 
        this.showAlert = false; 
        this.classAlert = "";
        this.classAlert = "";
      },5000);
    }
  }
}