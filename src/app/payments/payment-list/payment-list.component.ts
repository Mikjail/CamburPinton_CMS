import { PaymentService } from './../payments.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Store } from '@ngrx/store';
import { Payment } from './../payments.model';
import * as fromPayment from '../payments.reducer';
import * as PaymentActions from '../payments.actions';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'type', 'name', 'amount', 'status', 'option'];
  dataSource = new MatTableDataSource<Payment>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private paymentService: PaymentService,
    private store: Store<fromPayment.State>) { }

  ngOnInit() {
    this.store.select(fromPayment.getAvailablePayments).subscribe((payments: Payment[]) => {
      payments.length ? this.dataSource.data = payments : this.paymentService.fetchPayments();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  backToPending(element) {
    element.status =  'Pendiente';
    this.paymentService.updatePaymentStatus(element).subscribe(
      response => {
        this.store.dispatch(new PaymentActions.SetAvailablePayments(this.dataSource.data));
      }
    );
  }
}
