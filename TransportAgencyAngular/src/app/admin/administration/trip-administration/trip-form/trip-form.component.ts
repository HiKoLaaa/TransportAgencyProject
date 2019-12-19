import {Component} from '@angular/core';
import {TripFormGroup} from '../../../../form/trip/trip.form-group';
import {AvailablePlaceValidator} from '../../../../validator/available-place.validator';
import {TransportTypeRepository} from '../../../../model/repository/transportTypeRepository.model';
import {TransportType} from '../../../../model/dbModel/transportType.model';
import {Place} from '../../../../model/dbModel/place.model';
import {PlaceRepository} from '../../../../model/repository/placeRepository.model';
import {Location} from '@angular/common';
import {Trip} from '../../../../model/dbModel/trip.model';
import {ActivatedRoute, Router} from '@angular/router';
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
  mode: string;

  constructor(private transportRepository: TransportTypeRepository,
              private placeRepository: PlaceRepository,
              private tripRepository: TripRepository,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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
    if (activatedRoute.snapshot.params['mode'] === 'edit') {
      tripRepository.getTrip(activatedRoute.snapshot.queryParams['trip_id']).subscribe(tr => {
        this.trip = tr;
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
        this.tripRepository.addTrip(this.trip).subscribe();
      } else {
        this.tripRepository.editTrip(this.trip).subscribe();
      }

      this.router.navigateByUrl('admin_panel/trips');
    }
  }

  private prepareTrip() {
    if (this.mode === 'create') {
      this.trip = new Trip();
    }

    this.trip.arrivalPlace = this.places.find(pl => pl.name === this.form.get('arrivalPlace').value);
    this.trip.departurePlace = this.places.find(pl => pl.name === this.form.get('departurePlace').value);
    this.trip.price = parseInt(this.form.get('price').value, 10);
    this.trip.saleTickets = parseInt(this.form.get('saleTickets').value, 10);
    this.trip.availableTickets = parseInt(this.form.get('availableTickets').value, 10);
    this.trip.transportType = this.transportTypes.find(tt => tt.name === this.form.get('kindTransport').value);
    this.trip.arrivalTime = this.form.get('arrivalDate').value;
    this.trip.departureTime = this.form.get('departureDate').value;
  }

  private fillForm() {
    this.form.get('arrivalPlace').setValue(this.trip.arrivalPlace.name);
    this.form.get('departurePlace').setValue(this.trip.departurePlace.name);
    this.form.get('price').setValue(this.trip.price);
    this.form.get('saleTickets').setValue(this.trip.saleTickets);
    this.form.get('availableTickets').setValue(this.trip.availableTickets);
    this.form.get('kindTransport').setValue(this.trip.transportType.name);

    let date = new Date(this.trip.arrivalTime);
    this.form.get('arrivalDate').setValue(this.getTransformDateString(date));
    date = new Date(this.trip.departureTime);
    this.form.get('departureDate').setValue(this.getTransformDateString(date));
  }

  private getTransformDateString(oldDate: Date): string {
    return `${oldDate.getFullYear()}-${oldDate.getMonth() + 1}-${oldDate.getDate() < 10 ? '0' + oldDate.getDate() : oldDate.getDate()}`;
  }
}
