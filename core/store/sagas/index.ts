import { fork, all } from 'redux-saga/effects';

// imports all file except index.ts
const req : any = require.context('.', true, /^(?!.\/index).*.ts/);

const sagas: any[] = [];

req.keys().forEach((key: any) => {
    sagas.push(req(key).default);
});


export default function* rootSaga() {

    yield all(
        sagas.map(saga=>fork(saga))
    )
}