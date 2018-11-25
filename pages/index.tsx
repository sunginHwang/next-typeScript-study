import React, { Component } from 'react';
import SubComponent from '../component/SubComponent';
class Index extends Component {
    constructor(props) {
    super(props);
    }
  render() {
    return(
      <div>
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
