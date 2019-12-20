import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {TransportType} from '../../../../model/dbModel/transportType.model';
import {CountryFormGroup} from '../../../../form/country/country.form-group';
import {Country} from '../../../../model/dbModel/country.model';
import {CountryRepository} from '../../../../model/repository/countryRepository.model';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html'
})
export class CountryFormComponent implements OnInit {
  country: Country;
  form: CountryFormGroup;
  submitted: boolean;
  mode: string;

  constructor(private countryRepository: CountryRepository,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.form = new CountryFormGroup();
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['mode'] === 'edit') {
      this.countryRepository.getCountry(this.activatedRoute.snapshot.queryParams['coutnry_id'])
        .subscribe(country => {
          this.country = country;
          this.fillForm();
        });
      this.mode = 'edit';
    } else {
      this.mode = 'create';
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      this.prepareTrip();
      if (this.mode === 'create') {
        this.countryRepository.addCountry(this.country).subscribe();
      } else {
        this.countryRepository.editCountry(this.country).subscribe();
      }

      this.router.navigateByUrl('admin_panel/countries');
    }
  }

  private prepareTrip() {
    if (this.mode === 'create') {
      this.country = new TransportType();
    }

    this.country.name = this.form.get('name').value;
  }

  private fillForm() {
    this.form.get('name').setValue(this.country.name);
  }
}
