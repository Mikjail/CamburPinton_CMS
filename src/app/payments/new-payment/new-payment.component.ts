import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Payment } from '../payments.model';
import { PaymentService } from './../payments.service';
import { Store } from '@ngrx/store';
import * as fromPayment from '../payments.reducer';


@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  paymentList: Payment[];
  pendingPaymentList: Payment[];
  indexSelected = -1;
  constructor(
    private paymentService: PaymentService,
    private store: Store<fromPayment.State>,
    private router: Router ) { }

  ngOnInit() {
    this.store.select(fromPayment.getAvailablePayments).subscribe((payments: Payment[]) => {
      this.paymentList = payments;
      this.pendingPaymentList = payments.filter(payment => payment.status !== 'Pagado');
    });
    this.paymentService.fetchPayments();
  }

  selectPayment(id) {
    this.indexSelected = this.paymentList.map(payment => payment.id).indexOf(id);

  }
  onPayment(form: NgForm) {
    this.paymentList[this.indexSelected].status = 'Pagado';
    this.paymentService.updatePaymentStatus(this.paymentList);
    this.router.navigate(['/list']);
  }
}
