import {Component, Inject} from '@angular/core';
import {FindFormFormGroup} from '../../find-form/find-form.form-group';
import {TransportType} from '../../model/dbModel/transportType.model';
import {Guid} from 'guid-typescript';
import {FIND_INFO, FindTripInfoViewModel} from '../../view-model/findTripInfo.viewModel';
import {Observer} from 'rxjs';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.scss']
})
export class FindTripComponent {
  form: FindFormFormGroup;

  // TODO: delete it.
  tt: TransportType[];
  tname: string;

  constructor(@Inject(FIND_INFO) tripInfo: Observer<FindTripInfoViewModel>) {
    this.form = new FindFormFormGroup();

    // TODO: delete it.
    const tt1 = new TransportType();
    const tt2 = new TransportType();

    tt1.id = Guid.create();
    tt1.name = 'bus';
    tt2.id = Guid.create();
    tt2.name = 'plane';
    /************************************/

    this.tt = [tt1, tt2];
  }

  print() {
    console.log(this.tname);
  }
}
