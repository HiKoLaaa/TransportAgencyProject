import {Component, Inject} from '@angular/core';
import {FIND_INFO, FindTripInfoViewModel} from '../../view-model/findTripInfo.viewModel';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.scss']
})
export class TripInfoComponent {
  info: FindTripInfoViewModel;

  constructor(@Inject(FIND_INFO) private tripInfo: BehaviorSubject<FindTripInfoViewModel>,
              private router: Router) {
    tripInfo.pipe(
      filter(t => t.arrivalId !== undefined && t.departureId !== undefined && t.departureDate !== undefined))
      .subscribe(info => {
      this.info = info;
    });
  }

  goBack() {
    this.router.navigateByUrl('/find');
    this.tripInfo.next(this.info);
  }
}
