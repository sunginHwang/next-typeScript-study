import React, {Component} from 'react';
import {IJpholderInfo} from 'model/interface/IJpholderInfo';
import axios from 'axios';

class AsyncContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.asyncCall(2);
    }

    asyncCall(postNo: number): void {
        axios.request<IJpholderInfo>({
            method: 'get',
            url:`https://jsonplaceholder.typicode.com/posts/${postNo}`
        }).then((res)=>{console.log(res)})
    }


    render() {
        return (
            <div>
                AsyncCall
            </div>
        );
    }
}

export default AsyncContainer;
