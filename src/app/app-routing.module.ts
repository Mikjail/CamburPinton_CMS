import { NewPaymentComponent } from './payments/new-payment/new-payment.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';




const routes: Routes = [
    { path: '', component: PaymentListComponent},
    { path: 'operacion', component: NewPaymentComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
