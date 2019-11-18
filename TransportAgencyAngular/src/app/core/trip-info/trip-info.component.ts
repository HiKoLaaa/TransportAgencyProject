import {Component, Inject} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {FIND_INFO, FindTripInfoClientViewModel} from '../../view-model/find-trip-info.client.view-model';
import {FindTripInfoRequestServerViewModel} from '../../view-model/find-trip-info.request-server.view-model';
import {Trip} from '../../model/dbModel/trip.model';
import {TripRepository} from '../../model/repository/tripRepository.model';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent {
  info: FindTripInfoClientViewModel;
  infoParameters: Map<string, string>;
  findTrips: Trip[];

  constructor(@Inject(FIND_INFO) private tripInfo: BehaviorSubject<FindTripInfoClientViewModel>,
              private router: Router,
              private tripRepository: TripRepository) {
    this.infoParameters = new Map();
    this.findTrips = [];
    tripInfo
      .subscribe(info => {
      this.info = info;
      this.setViewInfo();
    });

    tripRepository.getSuitableTrips(this.modifyInfo())
      .subscribe(suitPl => {
        this.findTrips = suitPl;
      });
  }

  goBack() {
    this.router.navigateByUrl('/find');
    this.tripInfo.next(this.info);
  }

  private setViewInfo() {
    this.infoParameters.set('Откуда', this.info.departurePlace.name);
    this.infoParameters.set('Дата отправления', this.info.departureDate.toString());
    this.infoParameters.set('Куда', this.info.arrivalPlace.name);
    this.infoParameters.set('Дата прибытия', this.info.arrivalDate.toString());

    const transportType = 'Вид транспорта';
    if (this.info.transportType !== undefined) {
      this.infoParameters.set(transportType, this.info.transportType.name);
    }
    else {
      this.infoParameters.set(transportType, '');
    }
  }

  private modifyInfo(): FindTripInfoRequestServerViewModel {
    const tripInfo = new FindTripInfoRequestServerViewModel();
    tripInfo.arrivalId = this.info.arrivalPlace.id;
    tripInfo.arrivalDate = this.info.arrivalDate;
    tripInfo.departureDate = this.info.departureDate;
    tripInfo.departureId = this.info.departurePlace.id;

    if (this.info.transportType !== undefined) {
      tripInfo.transportTypeId = this.info.transportType.id;
    }

    return tripInfo;
  }
}
