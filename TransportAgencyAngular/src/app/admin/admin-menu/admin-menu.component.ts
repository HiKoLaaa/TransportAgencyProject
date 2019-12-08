import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent {
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
