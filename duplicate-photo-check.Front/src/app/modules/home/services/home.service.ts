import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class HomeService {

  apiUrl: string = Environment.API;

  constructor(private http: HttpClient) {}

  getProcess(sourceFolderPath: any, destinationFolderPath: any) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("sourceFolderPath",sourceFolderPath);
    queryParams = queryParams.append("destinationFolderPath",destinationFolderPath);

    return this.http.get(`${this.apiUrl}DuplicatePhotoCheck/GetProcess`, {params:queryParams}); 
  }
}