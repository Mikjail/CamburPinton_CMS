import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { productReducer } from './products.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductCreateComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        StoreModule.forFeature('product', productReducer)
    ],
    entryComponents: [ProductListComponent]
})

export class ProductModule {}
