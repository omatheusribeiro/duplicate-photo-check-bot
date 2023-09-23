import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class HomeService {

  apiUrl: string = Environment.API;

  constructor(private http: HttpClient) {}

  getProcess(sourceFolderPath: any, destinationFolderPath: any) {
    return this.
                http.get(`${this.apiUrl}
                            DuplicatePhotoCheck/GetProcess?
                            sourceFolderPath=${sourceFolderPath}&
                            destinationFolderPath=${destinationFolderPath}`);
  }
}