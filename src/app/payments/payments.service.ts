import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { Store} from '@ngrx/store';
import * as UI from '../shared/ui.actions';
import * as fromPayment from './payments.reducer';
import * as Payment from './payments.actions';
import { AppConstant } from './../constants';

@Injectable()
export class PaymentService {
    _baseURL: string;
    constructor(private http: HttpClient,
        private store: Store<fromPayment.State>) {
        this._baseURL = AppConstant.baseURL;
     }

    fetchPayments() {
        this.store.dispatch(new UI.StartLoading());
        this.http.get(`/API/Demo`).pipe(map(response => response))
        .subscribe((payments: any) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(new Payment.SetAvailablePayments(payments));
        });
    }

    updatePaymentStatus(payment) {
        this.store.dispatch(new UI.StartLoading());
        return this.http.post(`/API/Demo`,  payment).pipe(map((response: Response) => {
            this.store.dispatch(new UI.StopLoading());
            return response; }
        ));
    }
}
