import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent {
  administratingEntities: string[];

  constructor() {
    this.administratingEntities = ['Рейсы', 'Типы транспорта', 'Места', 'Страны', 'Покупатели'];
  }
}
