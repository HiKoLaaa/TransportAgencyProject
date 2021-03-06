import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {CanActivateOnlyMainPageGuard} from './can-activate-all-but-main-page/can-activate-only-main-page-guard.service';
import {ResolveTransportTypeInfoGuard} from './resolve-transport-type-info/resolve-transport-type-info.guard';
import {ResolveTripInfoGuard} from './resolve-trip-info/resolve-trip-info.guard';
import {ResolvePlaceInfoGuard} from './resolve-place-info/resolve-place-info.guard';
import {ResolveCountryInfoGuard} from './resolve-country-info/resolve-country-info.guard';

@NgModule({
  imports: [ModelModule],
  providers: [
    ResolveTripInfoGuard, CanActivateOnlyMainPageGuard,
    ResolveTransportTypeInfoGuard, ResolvePlaceInfoGuard,
    ResolveCountryInfoGuard
  ]
})
export class GuardModule { }
