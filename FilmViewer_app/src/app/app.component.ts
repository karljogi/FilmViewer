import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// The parent component of this app. Passes data between the two child components. I would change the implementation of the 'categories'
// input parameter. In a real world app the categories should be retrieved from the backend of the application and http requests should
// be made to get the necessary data to render to the client.
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

// Takes the input from search-form.component and passes it to table-of-contents.component. Also calls the
// viewModeSet() method, which dictates what is displayed on the screen. 

  onSearch(searchMessage) {
    this.post.search = searchMessage;
    this.viewModeSet();
  }

  // This method controls the boxesChecked array. Whenever a checkbox is clicked, this method checks if this checkbox was already checked,
  //  if not, the index of the checkbox is added to the boxesChecked array, otherwise, the index is deleted from the array. 

  onCheckBoxClicked(boxNumber){
    let  i = this.post.boxesChecked.indexOf(boxNumber);
    if (i === -1){
      this.post.boxesChecked.push(boxNumber);
      }
    else {
      this.post.boxesChecked.splice(i , 1);
    }
    this.viewModeSet();
  }

  // This is a controller function, which chooses the movies to render depending on user input. 'full', means that neither the searchbar nor
  // the checkboxes have been used, 'checkBox' means that one or more of the checkboxes are checked, 'searchBar' indicates that something
  // is written in the searchBar component. In this implementation searchBar overrides the checkbox component i.e if you choose one 
  // genre with a checkbox and use the seachBar at the same time, the result from the searchBar is shown to the user. 

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
