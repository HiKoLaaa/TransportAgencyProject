import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html'
})
export class AdminMenuComponent {
  administratingEntities: string[][];

  constructor(private location: Location) {
    this.administratingEntities = [
      ['Рейсы', 'trips'],
      ['Типы транспорта', 'transport_types'],
      ['Места', 'places'],
      ['Страны', 'countries']
    ];
  }
}
