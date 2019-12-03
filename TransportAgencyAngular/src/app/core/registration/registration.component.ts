import {Component} from '@angular/core';
import {RegistrationFormGroup} from '../../form/registration/registration.form-group';
import {Router} from '@angular/router';
import {AccountRepository} from '../../model/repository/accountRepository.model';
import {AvailablePlaceValidator} from '../../validator/available-place.validator';
import {AvailableEmailValidator} from '../../validator/available-email.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: RegistrationFormGroup;
  backLink: string;
  secondsToRedirect: number;
  success: boolean;
  submitted: boolean;

  constructor(private router: Router,
              private userRepository: AccountRepository) {
    this.form = new RegistrationFormGroup();
    this.backLink = '/find';
    this.secondsToRedirect = 5;
    const validator = new AvailableEmailValidator(userRepository);
    this.form.get('email').setAsyncValidators([
      validator.emailUniqueValidate().bind(this)
    ]);

    this.form.get('email').updateValueAndValidity();
  }

  formSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.userRepository.addUser(this.form.get('login').value,
        this.form.get('email').value, this.form.get('password').value).subscribe(
          res => {
            this.success = res;
            if (this.success) {
              this.form.reset();
              this.submitted = false;
              const interval = setInterval(() => {
                this.secondsToRedirect--;
                if (this.secondsToRedirect <= 0) {
                  clearInterval(interval);
                  this.router.navigateByUrl(this.backLink);
                }
              }, 1000);
            }
          }
      );
    }
  }
}
