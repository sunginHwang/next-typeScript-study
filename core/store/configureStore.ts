import modules from './modules';
import {createStore} from 'redux';

export default function configureStore() {
    const store = createStore(
        modules, /* preloadedState, */
    );
    return store;
}