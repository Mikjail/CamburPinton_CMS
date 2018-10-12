import { Payment } from './payments.model';
import { Action } from '@ngrx/store';

export const SET_AVAILABLE_PAYMENTS = '[payment] Set Available';

export class SetAvailablePayments implements Action {
    readonly type = SET_AVAILABLE_PAYMENTS;

    constructor(public payload: Payment[]) {}
}

export type PaymentActions = SetAvailablePayments;
