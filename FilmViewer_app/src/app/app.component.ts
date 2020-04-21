import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Post object, to pass data between components
post = {
  search: '',
  boxesChecked: [],

  // Controller object, see viewModeSet() function below
  viewMode: 'full',

  // When adding categories, they should also be added here and numbered accordingly.
  categories: {
    1: 'Crime',
    2: 'Adventure',
    3: 'Action',
    4: 'Sci-Fi',
    5: 'History',
    6: 'Animation'
  }
};

  onSearch(searchMessage) {
    console.log("The search was: " + searchMessage);
    this.post.search = searchMessage;
    console.log(this.post.search);
    this.viewModeSet();
  }

  onCheckBoxClicked(boxNumber){
    let  i = this.post.boxesChecked.indexOf(boxNumber);
    if (i === -1){
      this.post.boxesChecked.push(boxNumber);
      }
    else if (this.post.boxesChecked[1] == null){
      this.post.boxesChecked.pop();
    }
    else {
      this.post.boxesChecked.splice(i , i);
    }
    this.post.boxesChecked.forEach(element => {
        console.log(element);
    });
    this.viewModeSet();
  }

  // This is a controller function, which chooses the movies to render depending on user input.

  viewModeSet() {
    if ( this.post.search === '' && this.post.boxesChecked.length === 0 ) {
      this.post.viewMode = 'full';
    }
    else if ( this.post.search !== ''){
      this.post.viewMode = 'searchBar';
    }
    else {
      this.post.viewMode = 'checkBox';
    }
  }
}
