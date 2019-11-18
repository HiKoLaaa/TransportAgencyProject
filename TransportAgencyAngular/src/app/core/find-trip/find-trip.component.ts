import {Component, Inject} from '@angular/core';
import {FindTripFormGroup} from '../../form/find-trip.form-group';
import {TransportType} from '../../model/dbModel/transportType.model';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {TransportTypeRepository} from '../../model/repository/transportTypeRepository.model';
import {PlaceRepository} from '../../model/repository/placeRepository.model';
import {filter} from 'rxjs/operators';
import {Place} from '../../model/dbModel/place.model';
import {FIND_INFO, FindTripInfoClientViewModel} from '../../view-model/find-trip-info.client.view-model';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.scss']
})
export class FindTripComponent {
  form: FindTripFormGroup;
  info: FindTripInfoClientViewModel;
  submitted: boolean;
  transportTypes: TransportType[];
  places: Place[];
  placesNames: string[];
  keywordAutocomplete: string;

  // TODO: написать guard на resolve.
  constructor(@Inject(FIND_INFO) private tripInfo: BehaviorSubject<FindTripInfoClientViewModel>,
              private router: Router,
              private transportRepository: TransportTypeRepository,
              private placeRepository: PlaceRepository) {
    this.form = new FindTripFormGroup();
    this.placesNames = [];
    this.form.get('kindTransport').setValue('none');
    // TODO: убрать лишние проверки.
    tripInfo.pipe(
      filter(t => t.arrivalPlace !== undefined &&
        t.departurePlace !== undefined && t.departureDate !== undefined))
      .subscribe(info => {
        this.info = info;
        this.initForm();
      });

    transportRepository.getAllTypes().subscribe(tt => this.transportTypes = tt);
    placeRepository.getAllPlaces().subscribe(pl => {
      this.places = pl;
      this.places.forEach(place => this.placesNames.push(place.name));

      // TODO: добавить сортировку по возрастанию.
    });
    this.keywordAutocomplete = 'name';
  }

  initForm() {
    this.form.get('departurePlace').setValue(this.info.departurePlace.name);
    this.form.get('departureDate').setValue(this.info.departureDate);
    this.form.get('arrivalPlace').setValue(this.info.arrivalPlace.name);
    this.form.get('arrivalDate').setValue(this.info.arrivalDate);
    if (this.info.transportType !== null && this.info.transportType !== undefined) {
      this.form.get('kindTransport').setValue(this.info.transportType.name);
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.form.valid) {
      this.updateTripInfo();
      this.tripInfo.next(this.info);
      this.router.navigateByUrl('trips');
    }
  }

  private updateTripInfo() {
    // TODO: убрать лишние проверки.
    this.info = new FindTripInfoClientViewModel();
    let place = this.places.find(pl => pl.name === this.form.get('departurePlace').value);
    if (place === undefined) {
      return;
    }

    this.info.departurePlace = place;
    this.info.departureDate = this.form.get('departureDate').value;
    place = this.places.find(pl => pl.name === this.form.get('arrivalPlace').value);
    if (place === undefined) {
      return;
    }

    this.info.arrivalPlace = place;
    this.info.arrivalDate = this.form.get('arrivalDate').value;
    const tk = this.transportTypes.find(tt => tt.name === this.form.get('kindTransport').value);
    if (tk === undefined) {
      return;
    }

    this.info.transportType = tk;
  }
}
