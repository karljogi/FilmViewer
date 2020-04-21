import { Component, Input, Output, HostListener, EventEmitter, OnInit } from '@angular/core';
import { TableOfContentsService } from '../table-of-contents.service';
//import { TableOfContentsComponent } from '../table-of-contents/table-of-contents.component';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() changesToSearch = new EventEmitter();
  @Output() checkBoxClicked = new EventEmitter();
  @Input() categories;
  searchName = '';
  movies: any[];
  movieTitles: any[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private service: TableOfContentsService){
  }

  ngOnInit() {
    this.service.getContents()
    .subscribe(response => {
      this.movies = response as any;
    });
    this.getTitles();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.movieTitles.filter(option => option.toLowerCase().includes(filterValue));
  }

  onEnterPressed() {
    //console.log(this.searchName);
    this.changesToSearch.emit(this.searchName);
  }
  onChecking(boxNumber){
    this.checkBoxClicked.emit(boxNumber);

  }
  getTitles(){
    this.movies.forEach(element => {
      this.movieTitles.push(element.title);
    });
  }
}























// adventureMovies = false;
// actionMovies = false;
// sciFiMovies = false;
// historyMovies = false;
// animationMovies = false;

  // checkBoxClicked(genre) {

  //   switch (genre){
  //     case ('horrorMovies'):
  //       this.horrorMovies = !this.horrorMovies;
  //       console.log('HorrorMovies clicked, now: ' + this.horrorMovies);
  //       break;
  //     case ('romanticMovies'):
  //       this.romanticMovies = !this.romanticMovies;
  //       console.log('romanticMovies clicked, now: ' + this.romanticMovies);
  //       break;
  //     case('documentaryMovies'):
  //       this.documentaryMovies = !this.documentaryMovies;
  //       console.log('documentaryMovies clicked, now: ' + this.documentaryMovies);
  //       break;
  //     default:
  //       console.log('Nothing was clicked?');

  //     }
  //   }
