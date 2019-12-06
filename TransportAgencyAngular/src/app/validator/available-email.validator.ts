import {AbstractControl, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {AccountRepository} from '../model/repository/accountRepository.model';

export class AvailableEmailValidator {
  constructor(private userRepository: AccountRepository) {
  }

  emailUniqueValidate() {
    return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return new Observable<ValidationErrors>(x => {
        this.userRepository.checkEmail(c.value).subscribe(res => {
          res ? x.next(null) : x.next({matchEmail: true});
          x.complete();
        });
        }
      );
    };
  }
}
