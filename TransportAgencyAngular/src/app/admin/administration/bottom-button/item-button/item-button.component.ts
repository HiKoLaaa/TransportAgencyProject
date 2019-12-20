import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-button',
  templateUrl: './item-button.component.html'
})
export class ItemButtonComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

}
