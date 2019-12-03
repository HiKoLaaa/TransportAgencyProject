import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MAIN_PART_URL} from './url.model';
const AUTH_URL = 'auth';

@Injectable()
export class AccountRepository {
  constructor(private http: HttpClient) {
  }

  addUser(name: string, email: string, password: string): Observable<boolean> {
    const parameters = this.prepareInfo(name, email, password);
    return new Observable<boolean>(x => {
      this.http.post(`${MAIN_PART_URL}/${AUTH_URL}/registration`, null, {params: parameters})
        .subscribe(res => {
          if (res['statusCode'] === 200) {
            x.next(true);
          } else {
            x.next(false);
          }
        });
    });
  }

  private prepareInfo(name: string, log: string, userPassword: string): HttpParams {
    return new HttpParams({
      fromObject: {
        userName: name,
        userEmail: log,
        password: userPassword
      }
    });
  }
}
