import { Component, OnInit } from '@angular/core';
import {TripRepository} from '../../../../model/repository/tripRepository.model';
import {Trip} from '../../../../model/dbModel/trip.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-trip-show',
  templateUrl: './trip-show.component.html',
  styleUrls: ['./trip-show.component.scss']
})
export class TripShowComponent implements OnInit {
  trip: Trip;

  constructor(private tripRepository: TripRepository,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.tripRepository.getTrip(this.activatedRoute.snapshot.queryParams['trip_id'])
      .subscribe(tr => this.trip = tr);
  }

}
