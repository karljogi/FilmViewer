import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { TableOfContentsService } from '../table-of-contents.service';

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

  // public searchRender(search) {
  //   console.log('siin olen')
  //   this.movies.forEach(element => {
  //     if (element.title === search) {
  //       this.movies = this.movies[element]
  //     }
  //   });
  // }
}