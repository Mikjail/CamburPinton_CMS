import { Payment } from './payments.model';
import * as fromRoot from '../app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PaymentActions, SET_AVAILABLE_PAYMENTS } from './payments.actions';


export interface PaymentState {
    availablePayments: Payment[];
}

export interface State extends fromRoot.State {
    payment: PaymentState;
}

const initialState: PaymentState = {
    availablePayments: []
};


export function paymentReducer( state= initialState, action: PaymentActions) {
    switch (action.type) {
        case SET_AVAILABLE_PAYMENTS:
            return  { ...state, availablePayments : action.payload };
        default: {
            return state ;
        }

    }
}


export const getPaymentState = createFeatureSelector<PaymentState>('payment');

export const getAvailablePayments = createSelector(getPaymentState, (state: PaymentState) => state.availablePayments);
