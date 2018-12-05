import React, {Component} from 'react';
import SubComponent from '../component/SubComponent';
import AsyncContainer from '../container/AsyncContainer';
import CounterContainer from '../container/CounterContainer';
import PostContainer from '../container/PostContainer';

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
                <PostContainer/>
            </div>
        );
    }
}

export default Index;
