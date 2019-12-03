import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {CanActivateOnlyMainPageGuard} from './can-activate-all-but-main-page/can-activate-only-main-page-guard.service';
import {ResolveTripInfoGuard} from './resolve-trip-info/resolve-trip-info.guard';

@NgModule({
  imports: [ModelModule],
  providers: [ResolveTripInfoGuard, CanActivateOnlyMainPageGuard]
})
export class GuardModule { }
