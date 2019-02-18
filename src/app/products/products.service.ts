    import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Store} from '@ngrx/store';
import * as UI from '../shared/ui.actions';
import * as fromProducts from './products.reducer';
import * as Product from './products.actions';
import { AppConstant } from '../constants';

@Injectable()
export class ProductService {
    _baseURL: string;
    constructor(private http: HttpClient,
        private store: Store<fromProducts.State>) {
        this._baseURL = AppConstant.baseURL;
     }

    fetchProducts() {
        this.store.dispatch(new UI.StartLoading());
        this.http.get(`${AppConstant.productsAPI}`).pipe(map(response => response))
        .subscribe((products: any) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(new Product.SetAvailableProducts(products));
        });
    }
}
