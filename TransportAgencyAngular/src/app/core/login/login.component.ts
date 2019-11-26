import { Component } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {LoginInfoFormGroup} from '../../form/login-info.form-group';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSuccessLogIn: boolean;
  form: LoginInfoFormGroup;
  submit: boolean;
  login: string;

  constructor(private auth: AuthService) {
    this.form = new LoginInfoFormGroup();
    this.login = auth.loginName;
    this.submit = false;
    if (auth.jwToken) {
      this.isSuccessLogIn = true;
    }
  }

  authenticate() {
    this.submit = true;
    if (!this.isSuccessLogIn) {
      this.logIn();
    } else {
      this.logOut();
    }
  }

  private logIn() {
    if (this.form.valid) {
      this.auth.login(this.form.get('login').value, this.form.get('password').value)
        .subscribe(success => {
          this.login = this.form.get('login').value;
          this.isSuccessLogIn = success;
          if (this.isSuccessLogIn) {
            this.form.reset();
            this.submit = false;
          }
        });
    }
  }

  private logOut() {
    this.auth.logout();
    this.isSuccessLogIn = false;
    this.submit = false;
  }
}

