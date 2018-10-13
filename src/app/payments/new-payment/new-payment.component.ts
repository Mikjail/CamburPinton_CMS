import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Payment } from '../payments.model';
import { PaymentService } from './../payments.service';
import * as fromPayment from '../payments.reducer';
import * as fromRoot from '../../app.reducer';
import * as PaymentActions from '../payments.actions';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  isLoading$: Observable<Boolean>;
  paymentList: Payment[];
  pendingPaymentList: Payment[];
  indexSelected = -1;

  constructor(
    private paymentService: PaymentService,
    private store: Store<fromPayment.State>,
    private router: Router) { }

  ngOnInit() {
    this.store.select(fromPayment.getAvailablePayments).subscribe((payments: Payment[]) => {
      if ( payments.length > 0 ) {
        this.paymentList = payments;
        this.pendingPaymentList = payments.filter(payment => payment.status !== 'Pagado');
      } else {
        this.paymentService.fetchPayments();
      }
    });
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  selectPayment(id) {
    this.indexSelected = this.paymentList.map(payment => payment.id).indexOf(id);
  }

  onPayment(form: NgForm) {
    this.paymentList[this.indexSelected].status =  'Pagado';
    this.paymentService.updatePaymentStatus(this.paymentList[this.indexSelected]).subscribe(
      response => {
        this.store.dispatch(new PaymentActions.SetAvailablePayments(this.paymentList));
        this.router.navigateByUrl('/');
      }
    );
  }
}
