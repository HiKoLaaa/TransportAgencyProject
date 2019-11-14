import {Component, Inject} from '@angular/core';
import {FindFormFormGroup} from '../../find-form/find-form.form-group';
import {TransportType} from '../../model/dbModel/transportType.model';
import {FIND_INFO, FindTripInfoViewModel} from '../../view-model/findTripInfo.viewModel';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {TransportTypeRepository} from '../../model/repository/transportTypeRepository.model';
import {PlaceRepository} from '../../model/repository/placeRepository.model';
import {filter} from 'rxjs/operators';
import {Place} from '../../model/dbModel/place.model';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.scss']
})
export class FindTripComponent {
  form: FindFormFormGroup;
  info: FindTripInfoViewModel;
  submitted: boolean;
  transportTypes: TransportType[];
  places: Place[];
  placesNames: string[];
  keywordAutocomplete: string;

  constructor(@Inject(FIND_INFO) private tripInfo: BehaviorSubject<FindTripInfoViewModel>,
              private router: Router,
              private transportRepository: TransportTypeRepository,
              private placeRepository: PlaceRepository) {
    this.form = new FindFormFormGroup();
    this.placesNames = [];
    this.form.get('kindTransport').setValue('none');
    tripInfo.pipe(
      filter(t => t.arrivalId !== undefined && t.departureId !== undefined && t.departureDate !== undefined))
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
    this.placeRepository.getPlace(this.info.departureId).subscribe(pl =>  {
      this.form.get('departurePlace').setValue(pl.name);
    });

    this.form.get('departureDate').setValue(this.info.departureDate);
    this.placeRepository.getPlace(this.info.arrivalId).subscribe(pl =>  {
      this.form.get('arrivalPlace').setValue(pl.name);
    });

    this.form.get('arrivalDate').setValue(this.info.arrivalDate);
    this.transportRepository.getType(this.info.transportKindId).subscribe(tt =>  {
      if (tt !== null && tt !== undefined) {
        this.form.get('kindTransport').setValue(tt.name);
      }
    });
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
    this.info = new FindTripInfoViewModel();
    let place = this.places.find(pl => pl.name === this.form.get('departurePlace').value);
    if (place === undefined) {
      return;
    }

    this.info.departureId = place.id;
    this.info.departureDate = this.form.get('departureDate').value;
    place = this.places.find(pl => pl.name === this.form.get('arrivalPlace').value);
    if (place === undefined) {
      return;
    }

    this.info.arrivalId = place.id;
    this.info.arrivalDate = this.form.get('arrivalDate').value;
    const tk = this.transportTypes.find(tt => tt.name === this.form.get('kindTransport').value);
    if (tk === undefined) {
      return;
    }

    this.info.transportKindId = tk.id;
  }
}
