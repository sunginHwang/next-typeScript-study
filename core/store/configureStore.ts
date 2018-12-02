import modules from './modules';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const isProd = process.env.NODE_ENV === 'production';


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = isProd ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware));

    const store = createStore(
        modules,
        middleware
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

