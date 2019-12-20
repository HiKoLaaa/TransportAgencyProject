import {Component, OnInit} from '@angular/core';
import {TransportTypeRepository} from '../../../model/repository/transportTypeRepository.model';
import {TransportType} from '../../../model/dbModel/transportType.model';
import {Guid} from 'guid-typescript';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transport-type-administration',
  templateUrl: './transport-type-administration.component.html'
})
export class TransportTypeAdministrationComponent implements OnInit {
  allTransportTypes: TransportType[];

  constructor(private transportTypeRepository: TransportTypeRepository,
              private router: Router) {
    this.allTransportTypes = [];
  }

  ngOnInit() {
    this.getAllTypes();
  }

  deleteTransportType(id: Guid): void {
    this.transportTypeRepository.deleteType(id).subscribe(x => this.getAllTypes());
  }

  editTransportType(id: Guid) {
    this.router.navigateByUrl(`admin_panel/transport_types/form/edit?transport_type_id=${id}`);
  }

  private getAllTypes(): void {
    this.transportTypeRepository.getAllTypes().subscribe(tt => this.allTransportTypes = tt);
  }
}
