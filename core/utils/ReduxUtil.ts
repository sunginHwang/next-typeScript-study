import { IAsyncActionType } from '../../model/interface/async/IAsyncActionType';
import { REQUEST, SUCCESS, FAILURE} from '../../model/interface/async/AsyncType';

/*비동기 액션타입 생성자*/
export function  asyncActionTypeCreator ( prefix: string ): IAsyncActionType {

    return {
        INDEX: prefix,
        REQUEST: prefix+REQUEST,
        SUCCESS: prefix+SUCCESS,
        FAILURE: prefix+FAILURE
    };
}
