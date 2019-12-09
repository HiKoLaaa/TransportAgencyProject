import {BaseFormGroup} from '../base.form-group';
import {Validators} from '@angular/forms';
import {TripFormControl} from './trip.form-control';
import {OnlyDigitsValidator} from '../../validator/only-digits.validator';

export class TripFormGroup extends BaseFormGroup {
  constructor() {
    super({
      departurePlace: new TripFormControl('',
        'departurePlace', 'Место отправления', Validators.required),

      departureDate: new TripFormControl('',
        'departureDate', 'Дата отправления', Validators.required),

      arrivalPlace: new TripFormControl('',
        'arrivalPlace', 'Место прибытия', Validators.required),

      arrivalDate: new TripFormControl('',
        'arrivalDate', 'Дата прибытия', Validators.required),

      kindTransport: new TripFormControl('',
        'kindTransport', 'Вид транспорта', Validators.required),

      price: new TripFormControl('',
        'price', 'Цена',
        [Validators.required, Validators.min(0), OnlyDigitsValidator.ValidateNumber()]),

      availableTickets: new TripFormControl('',
        'availableTickets', 'Кол-во доступных билетов',
        [Validators.required, Validators.min(1), OnlyDigitsValidator.ValidateNumber()]),

      saleTickets: new TripFormControl('',
        'saleTickets', 'Кол-во проданных билетов',
        [Validators.required, Validators.min(0), OnlyDigitsValidator.ValidateNumber()]),
    });
  }
}
