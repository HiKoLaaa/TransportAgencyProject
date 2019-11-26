import {HttpClient, HttpParams} from '@angular/common/http';
import {MAIN_PART_URL} from '../../model/repository/url.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const AUTH_URL = 'auth';

@Injectable()
export class AuthService {
  private JWT = 'JW_Token';
  private LOGIN = 'LOGIN';

  constructor(private http: HttpClient) { }

  login(log: string, userPassword: string): Observable<boolean> {
    const paramets = new HttpParams({
      fromObject: {
        userName: log,
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
          } else {
            x.next(false);
          }
          x.complete();
        });
    });
  }

  logout() {
    this.removeJwToken();
    this.removeLoginName();
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
