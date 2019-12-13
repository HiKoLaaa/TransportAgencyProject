import { Component, OnInit } from '@angular/core';
import {TransportTypeFormGroup} from '../../../../form/transport-type/transport-type.form-group';
import {TransportTypeRepository} from '../../../../model/repository/transportTypeRepository.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {TransportType} from '../../../../model/dbModel/transportType.model';
import {Trip} from '../../../../model/dbModel/trip.model';

@Component({
  selector: 'app-transport-type-form',
  templateUrl: './transport-type-form.component.html',
  styleUrls: ['./transport-type-form.component.scss']
})
export class TransportTypeFormComponent implements OnInit {
  transportType: TransportType;
  form: TransportTypeFormGroup;
  submitted: boolean;
  mode: string;

  constructor(private transportTypeRepository: TransportTypeRepository,
              private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.form = new TransportTypeFormGroup();
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['mode'] === 'edit') {
      this.transportTypeRepository.getType(this.activatedRoute.snapshot.queryParams['transport_type_id'])
        .subscribe(tt => {
        this.transportType = tt;
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
        this.transportTypeRepository.addType(this.transportType).subscribe();
      } else {
        this.transportTypeRepository.editType(this.transportType).subscribe();
      }

      this.router.navigateByUrl('admin_panel/transportTypes');
    }
  }

  private prepareTrip() {
    if (this.mode === 'create') {
      this.transportType = new TransportType();
    }

    this.transportType.name = this.form.get('name').value;
  }

  private fillForm() {
    this.form.get('name').setValue(this.transportType.name);
  }
}
