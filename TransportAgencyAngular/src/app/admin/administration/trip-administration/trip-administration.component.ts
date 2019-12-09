import {Component} from '@angular/core';
import {TripRepository} from '../../../model/repository/tripRepository.model';
import {Trip} from '../../../model/dbModel/trip.model';
import {Guid} from 'guid-typescript';
import {Location} from '@angular/common';

@Component({
  selector: 'app-trip-administration',
  templateUrl: './trip-administration.component.html',
  styleUrls: ['./trip-administration.component.scss']
})
export class TripAdministrationComponent {
  allTrips: Trip[];

  constructor(private tripRepository: TripRepository,
              private location: Location) {
    this.allTrips = [];
    this.getAllTrips();
  }

  deleteTrip(id: Guid) {
    this.tripRepository.deleteTrip(id).subscribe(x => this.getAllTrips());
  }

  private getAllTrips() {
    this.tripRepository.getAllTrips().subscribe(trips => this.allTrips = trips);
  }
}
