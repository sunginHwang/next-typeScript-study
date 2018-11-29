import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {StoreState} from '../core/store/modules';

import {actionCreators} from '../core/store/actions/CounterAction';


class CountContainer extends Component<{
    value: number;
    CounterAction: typeof actionCreators;
}> {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        console.log(this.props);
    }

    onCountIncreaseClick = () =>{
        const {props} = this as any;
        const { CounterAction } = props;
        CounterAction.increment();
    };

    render() {
        console.log(this.props);
        return(
            <div>
                <button onClick={()=>this.onCountIncreaseClick()}>버튼클릭</button>
                <p>{this.props.value}</p>
            </div>
        );
    }
}
export default connect(
    ({ counter }: StoreState) => ({
        value: counter.value
    }),
    (dispatch) => ({
        CounterAction: bindActionCreators(actionCreators, dispatch)
    })
)(CountContainer as any);