import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FindTripComponent} from '../../core/find-trip/find-trip.component';

@Injectable()
export class CanActivateOnlyMainPageGuard implements CanActivate {
  private firstNavigation;

  constructor(private router: Router) {
    this.firstNavigation = true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (next.component !== FindTripComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }

    return true;
  }
}

