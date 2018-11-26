import React from 'react';
import {IMyInfo} from '../model/interface/IMyInfo';


export default ({ name, age, isStudent }: IMyInfo) => {
    return(
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{isStudent? '학생':'학생아님'}</h3>
        </div>
    );
}
