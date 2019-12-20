import {Component, OnInit} from '@angular/core';
import {TripRepository} from '../../../model/repository/tripRepository.model';
import {Trip} from '../../../model/dbModel/trip.model';
import {Guid} from 'guid-typescript';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trip-administration',
  templateUrl: './trip-administration.component.html',
  styleUrls: ['./trip-administration.component.scss']
})
export class TripAdministrationComponent implements OnInit {
  allTrips: Trip[];

  constructor(private tripRepository: TripRepository,
              private router: Router) {
    this.allTrips = [];
  }

  showTrip(id: Guid) {
    this.router.navigateByUrl(`admin_panel/trips/show?trip_id=${id}`);
  }

  deleteTrip(id: Guid) {
    this.tripRepository.deleteTrip(id).subscribe(x => this.getAllTrips());
  }

  editTrip(id: Guid) {
    this.router.navigateByUrl(`admin_panel/trips/form/edit?trip_id=${id}`);
  }

  private getAllTrips() {
    this.tripRepository.getAllTrips().subscribe(trips => this.allTrips = trips);
  }

  ngOnInit(): void {
    this.getAllTrips();
  }
}
