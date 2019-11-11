import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  license: string;
  github: string;

  constructor() {
    this.license = 'Сделано © HiKoLaaa';
    this.github = 'https://github.com/HiKoLaaa';
  }
}
