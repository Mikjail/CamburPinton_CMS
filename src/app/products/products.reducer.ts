import { Product } from './products.model';
import * as fromRoot from '../app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsAction, SET_AVAILABLE_PRODUCTS } from './products.actions';


export interface ProductState {
    availableProducts: Product[];
}

export interface State extends fromRoot.State {
    product: ProductState;
}

const initialState: ProductState = {
    availableProducts: []
};


export function productReducer( state= initialState, action: ProductsAction) {
    switch (action.type) {
        case SET_AVAILABLE_PRODUCTS:
            return  { ...state, availableProducts : action.payload };
        default: {
            return state ;
        }

    }
}


export const getProductState = createFeatureSelector<ProductState>('product');

export const getAvailableProducts = createSelector(getProductState, (state: ProductState) => { 
    console.log(state);
    return state.availableProducts; });
