import {NgModule} from '@angular/core';
import {
    MatSidenavModule, // SideNav Component
    MatToolbarModule, // SideNav Component
    MatListModule, // PaymentList Component
    MatTableModule, // PaymentList Component
    MatSortModule, // PaymentList Component
    MatPaginatorModule, // PaymentList Component
    MatCardModule, // NewPayment Component
    MatSelectModule, // NewPayment Component
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,//Loader Spinner
    MatButtonModule, // Buttons
    MatIconModule // Icons
 } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatCardModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatListModule,
        MatProgressSpinnerModule
    ]
})

export class MaterialModule {}

