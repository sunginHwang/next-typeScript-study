import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {ICounterInfo} from '../model/interface/ICounterInfo';
import {actionCreators} from '../core/store/actions/CounterAction';


class CountContainer extends Component<{
    value: number;
    CounterAction: typeof actionCreators;
}> {
    constructor(props) {
        super(props);
    }

    onCountIncreseClick = (e: any) =>{
        const {props} = this as any;
        console.log(e);
        const { CounterAction } = props;
        CounterAction.increment();
    };

    render() {
        console.log(this.props);
        return(
            <div>
                <button onClick={(e)=>this.onCountIncreseClick(e)}>버튼클릭</button>
                <p>{this.props.value}</p>
            </div>
        );
    }
}
export default connect(
    ({value}:ICounterInfo) => ({
        value: value
    }),
    (dispatch) => ({
        CounterAction: bindActionCreators(actionCreators, dispatch)
    })
)(CountContainer as any);