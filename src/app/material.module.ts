import {NgModule} from '@angular/core';
import {
    MatSidenavModule, // SideNav Component
    MatToolbarModule, // SideNav Component
    MatListModule, // ProductList Component
    MatTableModule, // ProductList Component
    MatSortModule, // ProductList Component
    MatPaginatorModule, // ProductList Component
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

