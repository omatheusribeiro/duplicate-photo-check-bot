import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HomeService } from "./services/home.service";
import { CarouselComponent } from "src/app/core/components/carousel/carousel.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })

export class HomeComponent implements AfterViewInit{

  @ViewChild(CarouselComponent) carouselComponent!: CarouselComponent;

  public showSpinner:boolean = false;
  public inputSliderValue:any = "";
  public classAlert:string = "";
  public textAlert:string = "";
  public showAlert:boolean = false;
  public runBot:boolean = false;

  public form = new FormGroup({
    sourceFolderPath: new FormControl('', [Validators.required])
  });

  constructor(public homeService: HomeService){}

  ngAfterViewInit(): void {
    if (this.carouselComponent) {
      this.carouselComponent.loadImages();
    }
  }

  separatePhotos(){
    this.showAlert = false; 
    if(this.form.valid){
      this.showSpinner = true;
      this.homeService.getProcess(this.form.value.sourceFolderPath).subscribe((res :any) => {
        setTimeout(() => { 
          this.showSpinner = false; 
          this.form.get('sourceFolderPath')?.setValue("");
        },2000);

        this.ngAfterViewInit();
        
        this.showAlert = true;
        this.classAlert = "alert alert-success";

        if(res.response != null){
          this.textAlert = res.message + "The duplicate photos have been moved to the following directory: 📂 " + res.response;
        }
        else{
          this.textAlert = "No duplicate photos were identified in this directory";
        }

        setTimeout(() => { 
          this.showAlert = false; 
          this.classAlert = "";
          this.classAlert = "";
          this.runBot = true;
        },5000);

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

  deletePhotos(){
    this.homeService.delete().subscribe(() => {
      setTimeout(() => { 
        this.showSpinner = false; 
        this.form.get('sourceFolderPath')?.setValue("");
      },2000);

      this.showAlert = true;
      this.classAlert = "alert alert-success";
      this.textAlert = "Successfully deleted photos and directory.";
      this.runBot = false;

      setTimeout(() => { 
        this.showAlert = false; 
        this.classAlert = "";
        this.classAlert = "";
        this.runBot = false;
      },8000);

    },
    error =>{
      this.showSpinner = false;

      this.showAlert = true;
      this.classAlert = "alert alert-danger";
      this.textAlert = error.message;
      this.runBot = false;

      setTimeout(() => { 
        this.showAlert = false; 
        this.classAlert = "";
        this.classAlert = "";
      },5000);
    })
  }
}