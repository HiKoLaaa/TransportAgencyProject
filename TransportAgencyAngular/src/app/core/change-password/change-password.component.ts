import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ChangePasswordFormGroup} from '../../form/change-password/change-password.form-group';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent {
  form: ChangePasswordFormGroup;
  success: boolean;
  submitted: boolean;

  constructor(private router: Router,
              private auth: AuthService,
              private location: Location) {
    this.form = new ChangePasswordFormGroup();
  }

  formSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.changePassword();
      this.submitted = false;
    }
  }

  private changePassword() {
    this.auth.changePassword(this.form.get('oldPassword').value, this.form.get('newPassword').value)
      .subscribe(success => {
        this.success = success;
        if (this.success) {
          this.form.reset();
        }
      });
  }
}
