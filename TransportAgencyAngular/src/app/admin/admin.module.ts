import {NgModule} from '@angular/core';
import {AdminMainPageComponent} from './admin-main-page/admin-main-page.component';
import {routing} from './admin-route/route.routing';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [CommonModule, routing],
  declarations: [AdminMainPageComponent],
  exports: [AdminMainPageComponent]
})
export class AdminModule { }
