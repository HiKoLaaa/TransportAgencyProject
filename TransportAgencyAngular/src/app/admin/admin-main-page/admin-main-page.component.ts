import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent {
  administratingEntities: string[][];

  constructor(private location: Location) {
    this.administratingEntities = [
      ['Рейсы', 'trips'],
      ['Типы транспорта', 'transportTypes'],
      ['Места', 'places'],
      ['Страны', 'countries'],
      ['Покупатели', 'customers']
    ];
  }

  goBack() {
    this.location.back();
  }
}
