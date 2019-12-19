import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-common',
  templateUrl: './admin-common.component.html',
  styleUrls: ['./admin-common.component.scss']
})
export class AdminCommonComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

}
