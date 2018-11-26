import { createAction } from 'redux-actions';

export const INCREMENT:string = 'counter/INCREMENT';
export const DECREMENT:string = 'counter/DECREMENT';

export const actionCreators = {
    increment: createAction(INCREMENT),
    decrement: createAction(DECREMENT),
};

