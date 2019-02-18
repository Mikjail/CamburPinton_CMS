import { Product } from './products.model';
import { Action } from '@ngrx/store';

export const SET_AVAILABLE_PRODUCTS = '[product] Set Available';

export class SetAvailableProducts implements Action {
    readonly type = SET_AVAILABLE_PRODUCTS;

    constructor(public payload: Product[]) {}
}

export type ProductsAction = SetAvailableProducts;
