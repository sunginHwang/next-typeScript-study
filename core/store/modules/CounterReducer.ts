import {  handleActions } from 'redux-actions';
import * as action from '../actions/CounterAction';
import {ICounterInfo} from '../../../model/interface/ICounterInfo';

const initialState: ICounterInfo ={
    value: 12
};

export default handleActions<ICounterInfo>(
    {
        [action.INCREMENT]:(state, action) => {
            console.log(state);
            console.log(action);
            return {...state, value : state.value + 1};
        },
        [action.DECREMENT]: (state) => ({ value: state.value - 1 }),
    },
    initialState
);
