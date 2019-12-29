import {HttpClient, HttpParams} from '@angular/common/http';
import {MAIN_PART_URL} from '../../model/repository/url.model';
import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LOG_IN} from './auth.log-in';

const AUTH_URL = 'auth';

@Injectable()
export class AuthService {
  private JWT = 'JW_Token';
  private LOGIN = 'LOGIN';

  constructor(private http: HttpClient,
              @Inject(LOG_IN) private isLoggedIn: BehaviorSubject<boolean>) {
    isLoggedIn.next(!!this.jwToken);
  }

  login(log: string, userPassword: string): Observable<boolean> {
    const paramets = new HttpParams({
      fromObject: {
        userEmail: log,
        password: userPassword
      }
    });

    return new Observable<boolean>(x => {
      this.http.post(`${MAIN_PART_URL}/${AUTH_URL}/login`, null, {params: paramets})
        .subscribe(token => {
          if (token['statusCode'] === 200) {
            this.storeJwToken(token['value']);
            this.storeLoginName(log);
            x.next(true);
            this.isLoggedIn.next(true);
          } else {
            x.next(false);
            this.isLoggedIn.next(false);
          }
          x.complete();
        });
    });
  }

  changePassword(oldPassword: string, newPassword: string): Observable<boolean> {
    const paramets = new HttpParams({
      fromObject: {
        oldPassword,
        newPassword
      }
    });

    return new Observable<boolean>(x => {
      this.http.post(`${MAIN_PART_URL}/${AUTH_URL}/change_password`, null, {params: paramets})
        .subscribe(success => {
          x.next(!!success);
          x.complete();
        });
    });
  }

  logout() {
    this.removeJwToken();
    this.removeLoginName();
    this.isLoggedIn.next(false);
  }

  get jwToken(): string {
    return localStorage.getItem(this.JWT);
  }

  get loginName(): string {
    return localStorage.getItem(this.LOGIN);
  }

  private storeLoginName(login: string) {
    localStorage.setItem(this.LOGIN, login);
  }

  private removeLoginName() {
    localStorage.removeItem(this.LOGIN);
  }

  private storeJwToken(jwt: string) {
    localStorage.setItem(this.JWT, jwt);
  }

  private removeJwToken() {
    localStorage.removeItem(this.JWT);
  }
}
