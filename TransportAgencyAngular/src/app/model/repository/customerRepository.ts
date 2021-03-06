import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';
import {MAIN_PART_URL} from './url.model';
import {Customer} from '../dbModel/customer.model';

const API_CUSTOMER = 'customer';

@Injectable()
export class CustomerRepository {
  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${MAIN_PART_URL}/${API_CUSTOMER}`);
  }

  getCustomer(id: Guid): Observable<Customer> {
    return this.http.get<Customer>(`${MAIN_PART_URL}/${API_CUSTOMER}/${id}`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    customer.id = Guid.create();
    return this.http.post<Customer>(`${MAIN_PART_URL}/${API_CUSTOMER}`, this.prepareToSave(customer));
  }

  editCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${MAIN_PART_URL}/${API_CUSTOMER}`, this.prepareToSave(customer));
  }

  deleteCustomer(id: Guid): Observable<Customer> {
    return this.http.delete<Customer>(`${MAIN_PART_URL}/${API_CUSTOMER}/${id}`);
  }

  private prepareToSave(customer: Customer): object {
    const body = {
      id: customer.id.toString(),
      firstName: customer.firstName,
      secondName: customer.secondName,
      number: customer.number,
      trip: customer.trip
    };

    return body;
  }
}
