import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { TableOfContentsService } from '../table-of-contents.service';

// This component renders the movies on the screen. As input it takes the search and filtering results
// of the search-form.component and also some helper inputs from the app.component. 
// This component uses the TableOfContentsService, which provides the Json objects from the backend.
// With more time I would have implemented the detailed information of the movies in here as well. 
// I also had an idea to show the movies as posters, with detailed information displayed on click
// but once again the time and skill constraints prevented me from doing this. 

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css']
})
export class TableOfContentsComponent implements OnInit {
  @Input() search;
  @Input() boxesClicked;
  @Input() viewMode;
  @Input() categories;
  movies: any[];
 
 constructor(private service: TableOfContentsService) {
  }

  ngOnInit() {
    this.service.getContents()
    .subscribe(response => {
      this.movies = response as any;
    });
  }
}
