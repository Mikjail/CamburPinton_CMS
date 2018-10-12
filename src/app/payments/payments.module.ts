import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';

import { paymentReducer} from './payments.reducer';

@NgModule({
    declarations: [
        NewPaymentComponent,
        PaymentListComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        StoreModule.forFeature('payment', paymentReducer)
    ],
    entryComponents: [PaymentListComponent]
})


export class PaymentModule {}