import React, {Component} from 'react';
import SubComponent from '../component/SubComponent';
import AsyncContainer from '../container/AsyncContainer';
import CounterContainer from '../container/CounterContainer';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AsyncContainer/>
                <CounterContainer/>
                <SubComponent
                    name={'성인'}
                    age={12}
                    isStudent={true}
                />
            </div>
        );
    }
}

export default Index;
