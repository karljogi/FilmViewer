import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableOfContentsService {
  private url = 'https://localhost:44384/Movie/GetMovieData';
  private url2 = 'https://localhost:44384/Movie/GetMoviesByID?categoryId=3';
  constructor(private http: HttpClient) {
  }

  getContents() {
    return this.http.get(this.url);
    }

}


