import { Action } from '@ngrx/store';
import { START_LOADING, STOP_LOADING } from './ui.types';

export class StartLoading implements Action {
    readonly type = START_LOADING;
}


export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}


export type UIActions = StartLoading | StopLoading;
