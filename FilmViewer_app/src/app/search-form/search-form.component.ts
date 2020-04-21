import { Component, Input, Output, HostListener, EventEmitter, OnInit } from '@angular/core';
import { TableOfContentsService } from '../table-of-contents.service';


// The search form component which takes user input and sends it to the table-of-contents component.
// This component outputs the checkBoxes and searchBar input for the table-of-contents compoment
// through their parent (app) component.

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() changesToSearch = new EventEmitter();
  @Output() checkBoxClicked = new EventEmitter();
  @Input() categories;
  searchName = '';

  onKeyPressed() {
    this.changesToSearch.emit(this.searchName);
  }

  onChecking(boxNumber){
    this.checkBoxClicked.emit(boxNumber);

  }
}
