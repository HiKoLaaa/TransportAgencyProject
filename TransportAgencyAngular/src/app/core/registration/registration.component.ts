import {Component} from '@angular/core';
import {RegistrationFormGroup} from '../../form/registration.form-group';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: RegistrationFormGroup;
  backLink: string;
  submitted: boolean;

  constructor(private router: Router) {
    this.form = new RegistrationFormGroup();

    // TODO: подправить.
    this.backLink = document.referrer;
  }

  formSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.router.navigateByUrl(this.backLink);
    }
  }
}
