import { Component, OnInit } from '@angular/core';
import {Country} from '../../../model/dbModel/country.model';
import {CountryRepository} from '../../../model/repository/countryRepository.model';
import {Guid} from 'guid-typescript';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country-administration',
  templateUrl: './country-administration.component.html',
  styleUrls: ['./country-administration.component.scss']
})
export class CountryAdministrationComponent implements OnInit {
  allCountries: Country[];

  constructor(private countryRepository: CountryRepository,
              private router: Router) {
    this.allCountries = [];
  }

  ngOnInit() {
    this.getAllCountries();
  }

  private getAllCountries(): void {
    this.countryRepository.getAllCountries().subscribe(countries => this.allCountries = countries);
  }

  private editCountry(id: Guid) {
    this.router.navigateByUrl(`admin_panel/countries/form/edit?country_id=${id}`);
  }

  private deleteCountry(id: Guid) {
    this.countryRepository.deleteCountry(id).subscribe(x => this.getAllCountries());
  }
}
