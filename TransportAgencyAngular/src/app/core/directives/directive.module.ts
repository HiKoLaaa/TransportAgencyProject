import {NgModule} from '@angular/core';
import {AppTripInfoIterateDirective} from './trip-info-iterate/app-trip-info-iterate.directive';

@NgModule({
  declarations: [AppTripInfoIterateDirective],
  exports: [AppTripInfoIterateDirective]
})
export class DirectiveModule { }
