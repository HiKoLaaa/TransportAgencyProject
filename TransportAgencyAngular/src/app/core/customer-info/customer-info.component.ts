import {Component} from '@angular/core';
import {CustomerInfoFormGroup} from '../../form/customer-info.form-group';
import {CustomerRepository} from '../../model/repository/customerRepository';
import {Customer} from '../../model/dbModel/customer.model';
import {Trip} from '../../model/dbModel/trip.model';
import {TripRepository} from '../../model/repository/tripRepository.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent {
  form: CustomerInfoFormGroup;
  customer: Customer;
  chosenTrip: Trip;
  submitted: boolean;

  constructor(private customerRepository: CustomerRepository,
              private tripRepository: TripRepository,
              private routeInfo: ActivatedRoute,
              private router: Router) {
    this.form = new CustomerInfoFormGroup();
    this.tripRepository.getTrip(routeInfo.snapshot.params['tripId']).subscribe(trip => {
      this.chosenTrip = trip;
    });
  }

  formSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.updateCustomerInfo();
      this.customerRepository.addCustomer(this.customer).subscribe();
      this.chosenTrip.availableTickets--;
      this.chosenTrip.saleTickets++;
      this.tripRepository.editTrip(this.chosenTrip).subscribe();
      this.router.navigateByUrl('thanks');
    }
  }

  updateCustomerInfo() {
    this.customer = new Customer();
    this.customer.firstName = this.form.get('firstName').value;
    this.customer.secondName = this.form.get('secondName').value;
    this.customer.number = this.form.get('number').value;
    this.customer.trip = this.chosenTrip;
  }
}
