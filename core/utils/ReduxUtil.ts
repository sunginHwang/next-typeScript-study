import {Action, ActionFunctionAny, createAction} from "redux-actions";


export interface ActionCreatorType {
    INDEX: string,
    REQUEST: string,
    SUCCESS: string,
    FAILURE: string
}


/*비동기 액션타입 생성자*/
export function  asyncActionTypeCreator ( prefix: string ): ActionCreatorType {
    const asyncTypeAction: string[] = ['_REQUEST','_SUCCESS','_FAILURE'];

    const actionNameRequest: string = asyncTypeAction[0];
    const actionNameSuccess: string = asyncTypeAction[1];
    const actionNameFailure: string = asyncTypeAction[2];
    return {
        INDEX: prefix,
        REQUEST: prefix+actionNameRequest,
        SUCCESS: prefix+actionNameSuccess,
        FAILURE: prefix+actionNameFailure
    };
}

export interface ActionFuncType {
    [key: string]: ActionFunctionAny<Action<any>>
}

/*비동기 액션 생성자*/
export function asyncActionCreator (actionName:string, actions: ActionCreatorType): ActionFuncType {
    let test:{[key: string]: ActionFunctionAny<Action<any>>} = {};
    test[actionName] = createAction(actions.INDEX);
    test[actionName+'_Request'] = createAction(actions.REQUEST);
    test[actionName+'_Success'] = createAction(actions.SUCCESS);
    test[actionName+'_Failure'] = createAction(actions.FAILURE);
    return test;
}
