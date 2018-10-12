import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { Store} from '@ngrx/store';
import * as fromPayment from './payments.reducer';
import * as Payment from './payments.actions';

@Injectable()
export class PaymentService {
    payments = [
        {
            id: '1',
            date: '10/12/2019',
            name: 'Edenor',
            type: 'Servicios',
            amount: 100,
            status: 'Pendiente'
        },
        {
            id: '2',
            date: '5/12/2019',
            name: 'Agua',
            type: 'Servicios',
            amount: 120,
            status: 'Pendiente'
        },
        {
            id: '3',
            date: '7/12/2019',
            name: 'Telecom',
            type: 'Telecomunicacion',
            amount: 180,
            status: 'Pagado'
        },
        {
            id: '4',
            date: '8/12/2019',
            name: 'Visa',
            type: 'Tarjeta de Credito',
            amount: 190,
            status: 'Pendiente'
        }
    ];

    constructor(private http: HttpClient, private store: Store<fromPayment.State>) { }

    fetchPayments() {
        // this.http.get('payments').pipe(map((response: Response) => response.json()));
        this.store.dispatch(new Payment.SetAvailablePayments(this.payments));
    }

    updatePaymentStatus(payments){
        this.store.dispatch(new Payment.SetAvailablePayments(this.payments));
    }
}
