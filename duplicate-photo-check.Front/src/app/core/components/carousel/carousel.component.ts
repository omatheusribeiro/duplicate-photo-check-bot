import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    images: string[] = [];

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.loadImages();
    }

    loadImages() {
        this.homeService.getImages()
        .subscribe((res: any) => {
            this.images = res;
        });
    }
}
