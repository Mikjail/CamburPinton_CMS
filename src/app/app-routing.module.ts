import { ProductListComponent } from './products/product-list/product-list.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
    { path: '', component: ProductListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
