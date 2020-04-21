import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// This service provides the Json objects from the backend. Right now it only provides the full movies list, which is then rendered
// in the app. In a full implementation it would also provide the movie details and movies by category. The backend 
// implementation for this has been built, but due to time constraints I did not manage to implement this in the frontend. 

@Injectable({
  providedIn: 'root'
})
export class TableOfContentsService {
  private url = 'https://localhost:44384/Movie/GetMovieData';
  private url2 = 'https://localhost:44384/Movie/GetMoviesByID?categoryId=';
  constructor(private http: HttpClient) {
  }

  getContents() {
    return this.http.get(this.url);
    }

}


