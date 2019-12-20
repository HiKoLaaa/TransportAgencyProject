import {Component} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {LoginInfoFormGroup} from '../../form/login/login-info.form-group';
import {AccountRepository} from '../../model/repository/accountRepository.model';
import {RoleNameHelper} from '../../model/helper/role-name.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  isSuccessLogIn: boolean;
  form: LoginInfoFormGroup;
  submit: boolean;
  login: string;
  admin: boolean;

  constructor(private auth: AuthService,
              private accountRepository: AccountRepository) {
    this.form = new LoginInfoFormGroup();
    this.login = auth.loginName === null ? '' : auth.loginName.toLowerCase();
    this.submit = false;
    if (auth.jwToken) {
      this.isSuccessLogIn = true;
      this.isAdmin();
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
          this.login = this.form.get('login').value.toString().toLowerCase();
          this.isSuccessLogIn = success;
          if (this.isSuccessLogIn) {
            this.isAdmin();
            this.form.reset();
            this.submit = false;
          }
        });
    }
  }

  private logOut() {
    this.auth.logout();
    this.isSuccessLogIn = undefined;
    this.submit = false;
    this.admin = undefined;
  }

  private isAdmin() {
    this.accountRepository.getRole().subscribe(role => this.admin = role === RoleNameHelper.ADMIN_ROLE);
  }
}
