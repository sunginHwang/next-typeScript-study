export interface IReducerAction<T>{
    status: number;
    statusText: string;
    request: any;
    headers: any;
    config: any;
    data: T;
}

