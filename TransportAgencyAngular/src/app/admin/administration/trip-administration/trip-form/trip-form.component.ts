import {Component} from '@angular/core';
import {TripFormGroup} from '../../../../form/trip/trip.form-group';
import {AvailablePlaceValidator} from '../../../../validator/available-place.validator';
import {TransportTypeRepository} from '../../../../model/repository/transportTypeRepository.model';
import {TransportType} from '../../../../model/dbModel/transportType.model';
import {Place} from '../../../../model/dbModel/place.model';
import {PlaceRepository} from '../../../../model/repository/placeRepository.model';
import {Location} from '@angular/common';
import {Trip} from '../../../../model/dbModel/trip.model';
import {Router} from '@angular/router';
import {TripRepository} from '../../../../model/repository/tripRepository.model';
import {AvailableTransportTypeValidator} from '../../../../validator/available-transport-type.validator';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.scss']
})
export class TripFormComponent {
  form: TripFormGroup;
  submitted: boolean;
  transportTypes: TransportType[];
  places: Place[];
  placesNames: string[];
  keywordAutocomplete: string;
  trip: Trip;

  constructor(private transportRepository: TransportTypeRepository,
              private placeRepository: PlaceRepository,
              private tripRepository: TripRepository,
              private location: Location,
              private router: Router) {
    this.form = new TripFormGroup();
    this.placesNames = [];
    this.form.get('kindTransport').setValue('none');
    transportRepository.getAllTypes().subscribe(tt => {
      this.transportTypes = tt;
      const transportTypeValidator = new AvailableTransportTypeValidator(this.transportTypes);
      this.form.get('kindTransport').setValidators([
        transportTypeValidator.validate.bind(this),
        this.form.get('kindTransport').validator
      ]);

      this.form.get('kindTransport').updateValueAndValidity();
    });
    placeRepository.getAllPlaces().subscribe(pl => {
      this.places = pl;
      this.places.forEach(place => this.placesNames.push(place.name));
      this.placesNames.sort();
      const placeValidator = new AvailablePlaceValidator(this.places);
      this.form.get('departurePlace').setValidators([
        placeValidator.validate.bind(this),
        this.form.get('departurePlace').validator
      ]);

      this.form.get('arrivalPlace').setValidators([
        placeValidator.validate.bind(this),
        this.form.get('arrivalPlace').validator
      ]);

      this.form.get('departurePlace').updateValueAndValidity();
      this.form.get('arrivalPlace').updateValueAndValidity();
    });

    this.keywordAutocomplete = 'name';
  }

  submitForm() {
    this.submitted = true;
    this.prepareTrip();
    if (this.form.valid) {
      this.tripRepository.addTrip(this.trip).subscribe();
      this.router.navigateByUrl('admin_panel/trips');
    }
  }

  private prepareTrip() {
    this.trip = new Trip();
    this.trip.arrivalPlace = this.places.find(pl => pl.name === this.form.get('arrivalPlace').value);
    this.trip.departurePlace = this.places.find(pl => pl.name === this.form.get('departurePlace').value);
    this.trip.price = parseInt(this.form.get('price').value, 10);
    this.trip.saleTickets = parseInt(this.form.get('saleTickets').value, 10);
    this.trip.availableTickets = parseInt(this.form.get('availableTickets').value, 10);
    this.trip.transportType = this.transportTypes.find(tt => tt.name === this.form.get('kindTransport').value);
    this.trip.arrivalTime = this.form.get('arrivalDate').value;
    this.trip.departureTime = this.form.get('departureDate').value;
  }
}
