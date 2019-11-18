import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {PagesCanActivateGuard} from './can-activate-all-but-main-page/pages-can-activate.guard';
import {ResolveTripInfoGuard} from './resolve-trip-info/resolve-trip-info.guard';

@NgModule({
  imports: [ModelModule],
  providers: [ResolveTripInfoGuard, PagesCanActivateGuard]
})
export class GuardModule { }
