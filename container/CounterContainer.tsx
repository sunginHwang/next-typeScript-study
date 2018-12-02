import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {StoreState} from '../core/store/modules';
import { actionCreators as counterActions } from '../core/store/actions/CounterAction';


class CountContainer extends Component<{
    value: number;
    CounterActions: typeof counterActions;
}> {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
    }

    onCountIncreaseClick = () =>{
        const {props} = this as any;
        const { CounterActions } = props;
        CounterActions.increment();
    };

    render() {
        const {props} = this as any;

        return(
            <div>
                <button onClick={()=>this.onCountIncreaseClick()}>버튼클릭</button>
                <p>{props.value}</p>
            </div>
        );
    }
}

export default connect(
    ({ counter }: StoreState) => ({
        value: counter.value
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(CountContainer as any);