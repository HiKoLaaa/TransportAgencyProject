import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaceFormGroup} from '../../../../form/place/place.form-group';
import {Place} from '../../../../model/dbModel/place.model';
import {PlaceRepository} from '../../../../model/repository/placeRepository.model';
import {Country} from '../../../../model/dbModel/country.model';
import {CountryRepository} from '../../../../model/repository/countryRepository.model';
import {AvailableCountryValidator} from '../../../../validator/available-country.validator';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.scss']
})
export class PlaceFormComponent implements OnInit {
  place: Place;
  countries: Country[];
  form: PlaceFormGroup;
  submitted: boolean;
  mode: string;

  constructor(private placeRepository: PlaceRepository,
              private countryRepository: CountryRepository,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.form = new PlaceFormGroup();
    this.countries = [];
  }

  ngOnInit() {
    this.initForm();
    this.initCountries();
    this.setCountryValidatorOnForm();
  }

  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      this.preparePlace();
      if (this.mode === 'create') {
        this.placeRepository.addPlace(this.place).subscribe();
      } else {
        this.placeRepository.editPlace(this.place).subscribe();
      }

      this.router.navigateByUrl('admin_panel/places');
    }
  }

  private initForm() {
    if (this.activatedRoute.snapshot.params['mode'] === 'edit') {
      this.placeRepository.getPlace(this.activatedRoute.snapshot.queryParams['place_id'])
        .subscribe(pl => {
          this.place = pl;
          this.fillForm();
        });
      this.mode = 'edit';
    } else {
      this.mode = 'create';
    }

    this.setCountryListDefault();
  }

  private setCountryListDefault(): void {
    this.form.get('country').setValue('none');
  }

  private initCountries() {
    this.countryRepository.getAllCountries().subscribe(countries => this.countries = countries);
  }

  private preparePlace() {
    if (this.mode === 'create') {
      this.place = new Place();
    }

    this.place.name = this.form.get('name').value;
    this.place.country = this.countries.find(country => country.name ===  this.form.get('country').value);
  }

  private fillForm() {
    this.form.get('name').setValue(this.place.name);
    this.form.get('country').setValue(this.place.country.name);
  }

  private setCountryValidatorOnForm(): void {
    this.countryRepository.getAllCountries().subscribe(countries => {
      const countryValidator = new AvailableCountryValidator(countries);
      this.form.get('country').setValidators([
        countryValidator.validate.bind(countryValidator)
      ]);

      this.form.get('country').updateValueAndValidity();
    });
  }
}
