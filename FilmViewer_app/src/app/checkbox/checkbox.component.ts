import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {


  onChecking() {
    console.log('checkbox was checked');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
