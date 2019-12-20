import {Component, OnInit} from '@angular/core';
import {Place} from '../../../model/dbModel/place.model';
import {PlaceRepository} from '../../../model/repository/placeRepository.model';
import {Guid} from 'guid-typescript';
import {Router} from '@angular/router';

@Component({
  selector: 'app-place-administration',
  templateUrl: './place-administration.component.html',
  styleUrls: ['./place-administration.component.scss']
})
export class PlaceAdministrationComponent implements OnInit {
  allPlaces: Place[];

  constructor(private placeRepository: PlaceRepository,
              private router: Router) {
    this.allPlaces = [];
  }

  ngOnInit() {
    this.getAllPlaces();
  }

  private getAllPlaces(): void {
    this.placeRepository.getAllPlaces().subscribe(pls => this.allPlaces = pls);
  }

  private editPlace(id: Guid) {
    this.router.navigateByUrl(`admin_panel/places/form/edit?place_id=${id}`);
  }

  private deletePlace(id: Guid) {
    this.placeRepository.deletePlace(id).subscribe(x => this.getAllPlaces());
  }

}
